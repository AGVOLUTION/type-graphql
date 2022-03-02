"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMetadataStorage = void 0;
const metadata_storage_1 = require("../metadata/metadata-storage");
const randId = Math.random().toString();
function getMetadataStorage() {
    return (global["TypeGraphQLMetadataStorage"+randId] || (global["TypeGraphQLMetadataStorage"+randId] = new metadata_storage_1.MetadataStorage()));
}
exports.getMetadataStorage = getMetadataStorage;
