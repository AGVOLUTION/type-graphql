import { MetadataStorage } from "../metadata/metadata-storage";

const randId = Math.random().toString();
export function getMetadataStorage(): MetadataStorage {
  return (
    global["TypeGraphQLMetadataStorage"+randId] || (global["TypeGraphQLMetadataStorage"+randId] = new MetadataStorage())
  );
}
