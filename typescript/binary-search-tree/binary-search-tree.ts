export class BinarySearchTree {
  value: number;
  leftNode: BinarySearchTree | undefined;
  rightNode: BinarySearchTree | undefined;
  constructor(data: number) {
    this.value = data;
    this.leftNode = undefined;
    this.rightNode = undefined;
  }

  public get data(): unknown {
    return this.value;
  }

  public get right(): BinarySearchTree | undefined {
    return this.rightNode;
  }

  public get left(): BinarySearchTree | undefined {
    return this.leftNode;
  }

  public insert(item: number): void {
    if (item > this.value) {
      if (!this.rightNode) {
        this.rightNode = new BinarySearchTree(item);
      } else {
        this.rightNode.insert(item);
      }
    } else {
      if (!this.leftNode) {
        this.leftNode = new BinarySearchTree(item);
      } else {
        this.leftNode.insert(item);
      }
    }
  }

  public each(callback: (data: number) => void): void {
    this.leftNode?.each(callback);
    callback(this.value);
    this.rightNode?.each(callback);
  }
}
