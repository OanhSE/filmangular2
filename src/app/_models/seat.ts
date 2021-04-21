export class Seat{
  id: string;
  rowIndex: string;
  columnIndex: string;

  constructor(id: string, rowIndex: string, columnIndex: string) {
    this.id = id;
    this.rowIndex = rowIndex;
    this.columnIndex = columnIndex;
  }
}
