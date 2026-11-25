# PDF to Summary

A workspace for turning PDFs into editable summaries and checking each result against the original document.

## Using the workspace

Upload a PDF and choose a summary language. For a document with an embedded text layer, Poppler reads the pages locally. For a scan, select the Gemini parser. Both paths use Gemini to generate the summary.

Select a document in the library to open its drawer. Switch between the summary, extracted text, original PDF and processing details. In forms, the text view uses page coordinates to align labels and values. You can edit a summary, generate another language version and export the selected version as Markdown.

## How it works

- A Go API receives uploads. A separate Go worker picks up jobs from Redis Streams and records progress page by page.
- Redis Pub/Sub and WebSocket events tell the browser when a document changes. The workspace displays completed, partial and failed outcomes.
- Documents and Reports are separate React and Vite applications behind one gateway. Docker Compose runs the local stack.
- Reports list upcoming expiry dates. By default, documents remain available for seven days after processing finishes. A newly generated summary restarts the timer.

## Source and setup

The private source repository contains the Docker Compose quick start and configuration reference. [Open the source repository (access required)](https://github.com/tomaszgieszczyk/pdf-to-summary).

[Return to the portfolio](https://tomaszgieszczyk.github.io/#work)
