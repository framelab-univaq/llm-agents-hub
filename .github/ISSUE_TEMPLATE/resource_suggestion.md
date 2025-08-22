name: Resource Suggestion
description: Propose a new resource to include
title: "[Resource] <title>"
labels: ["suggestion"]
body:
  - type: input
    id: url
    attributes:
      label: Link
      placeholder: https://...
    validations:
      required: true
  - type: textarea
    id: why
    attributes:
      label: Why it matters (1–2 lines)
    validations:
      required: true
  - type: input
    id: tags
    attributes:
      label: Tags (space-separated)
      placeholder: e.g., benchmark multi-agent production
