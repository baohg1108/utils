import type { ObjectId } from "mongodb";

/**
 * toHexString: Là method chính thức của ObjectId, được kết kế để convert ObjectId > string
 * Trả về chuỗi hex 24 ký tự chuẩn MongoDB _id
 */
export function objectIdToString(id: ObjectId): string {
  if (!id) {
    throw new Error("ObjectId is required");
  }
  return id.toHexString();
}
