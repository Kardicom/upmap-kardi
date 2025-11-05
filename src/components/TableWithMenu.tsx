"use client";

import React from "react";

type MenuState = {
  open: boolean;
  x: number;
  y: number;
};

const MENU_WIDTH = 220;
const MENU_HEIGHT = 132;

const TableWithMenu: React.FC<React.HTMLAttributes<HTMLTableElement>> = ({
  className,
  children,
  ...rest
}) => {
  const tableRef = React.useRef<HTMLTableElement>(null);
  const actionButtonRef = React.useRef<HTMLButtonElement>(null);
  const [menuState, setMenuState] = React.useState<MenuState>({
    open: false,
    x: 0,
    y: 0,
  });
  const [selectedCell, setSelectedCell] = React.useState<HTMLTableCellElement | null>(null);

  const closeMenu = React.useCallback(() => {
    setMenuState((prev) => (prev.open ? { ...prev, open: false } : prev));
  }, []);

  const openMenu = React.useCallback((x: number, y: number) => {
    const safeX = Math.min(x, window.innerWidth - MENU_WIDTH - 12);
    const safeY = Math.min(y, window.innerHeight - MENU_HEIGHT - 12);

    setMenuState({
      open: true,
      x: safeX,
      y: safeY,
    });
  }, []);

  React.useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const handleDocumentClick = (event: MouseEvent) => {
      if (actionButtonRef.current?.contains(event.target as Node)) {
        return;
      }
      closeMenu();
    };

    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("scroll", closeMenu, true);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("scroll", closeMenu, true);
      document.removeEventListener("keydown", handleKey);
    };
  }, [closeMenu]);

  React.useEffect(() => {
    if (!menuState.open || !selectedCell) {
      return undefined;
    }

    selectedCell.classList.add("outline", "outline-2", "outline-blue-400");

    return () => {
      selectedCell.classList.remove("outline", "outline-2", "outline-blue-400");
    };
  }, [menuState.open, selectedCell]);

  const handleTableClick = (event: React.MouseEvent<HTMLTableElement>) => {
    const target = event.target as HTMLElement;
    const cell = target.closest("td,th") as HTMLTableCellElement | null;
    if (cell) {
      setSelectedCell(cell);
    }
  };

  const handleContextMenu = (event: React.MouseEvent<HTMLTableElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const tableElement = tableRef.current;
    if (!tableElement) {
      return;
    }

    const target = event.target as HTMLElement;
    const cell = target.closest("td,th") as HTMLTableCellElement | null;
    if (cell) {
      setSelectedCell(cell);
    }

    openMenu(event.clientX, event.clientY);
  };

  const deleteTable = () => {
    const tableElement = tableRef.current;
    if (!tableElement) {
      return;
    }

    tableElement.remove();
    setSelectedCell(null);
    closeMenu();
  };

  const deleteRow = () => {
    const row = selectedCell?.closest("tr");
    if (!row) {
      return;
    }

    const section = row.parentElement;
    row.remove();

    if (section instanceof HTMLTableSectionElement && section.rows.length === 0) {
      section.remove();
    }

    closeMenu();
  };

  const deleteColumn = () => {
    const tableElement = tableRef.current;
    const cell = selectedCell;
    if (!tableElement || !cell) {
      return;
    }

    const columnIndex = cell.cellIndex;
    if (columnIndex < 0) {
      return;
    }

    const rows = tableElement.querySelectorAll("tr");
    rows.forEach((row) => {
      if (row.cells.length > columnIndex) {
        row.deleteCell(columnIndex);
      }
      if (row.cells.length === 0) {
        row.remove();
      }
    });

    closeMenu();
  };

  const handleMenuButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const buttonRect = event.currentTarget.getBoundingClientRect();
    const x = buttonRect.right;
    const y = buttonRect.bottom + 6;

    openMenu(x, y);
  };

  const mergedClassName = [
    "w-full border-collapse my-6 text-sm",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
  <div className="relative group">
      <table
        {...rest}
        ref={tableRef}
        className={mergedClassName}
        onContextMenu={handleContextMenu}
        onClick={handleTableClick}
      >
        {children}
      </table>

      <button
        type="button"
        ref={actionButtonRef}
        className="absolute top-2 right-2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-lg font-semibold text-slate-600 shadow-md transition hover:border-blue-400 hover:text-blue-500"
        onClick={handleMenuButtonClick}
        aria-label="Действия с таблицей"
      >
        ⋮
      </button>

      {menuState.open && (
        <div
          className="fixed z-[9999] min-w-[190px] rounded-md border border-slate-200 bg-white shadow-xl"
          style={{ top: menuState.y, left: menuState.x }}
          onClick={(event) => event.stopPropagation()}
          onContextMenu={(event) => event.preventDefault()}
        >
          <button
            type="button"
            className="block w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-100"
            onClick={deleteTable}
          >
            Удалить таблицу
          </button>
          <button
            type="button"
            className={`block w-full px-4 py-2 text-left text-sm ${
              selectedCell
                ? "text-slate-700 hover:bg-slate-100"
                : "cursor-not-allowed text-slate-400"
            }`}
            onClick={deleteRow}
            disabled={!selectedCell}
          >
            Удалить строку
          </button>
          <button
            type="button"
            className={`block w-full px-4 py-2 text-left text-sm ${
              selectedCell
                ? "text-slate-700 hover:bg-slate-100"
                : "cursor-not-allowed text-slate-400"
            }`}
            onClick={deleteColumn}
            disabled={!selectedCell}
          >
            Удалить столбец
          </button>
        </div>
      )}
    </div>
  );
};

export default TableWithMenu;
