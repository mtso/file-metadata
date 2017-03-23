# File Metadata

File metadata microservice. Upload a file at [`/upload`](/upload) to view its filesize.

## User Story

1. I can submit a FormData object that includes a file upload.
1. When I submit something, I will receive the file size in bytes within the JSON response

## Example Response:

```
{"size":850988}
```