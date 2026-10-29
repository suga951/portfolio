---
title: "[Placeholder] Hello, world — why I'm starting this blog"
description: "A placeholder starter post. Replace it with your first real article."
pubDate: 2026-10-28
tags: ["meta", "placeholder"]
draft: true
---

> **This is a placeholder post.** Replace this content with your own writing, then set
> `draft: false` in the frontmatter (or delete this file).

## Ideas for a first post

Writing a few short technical posts is a great way to show how you think. Some prompts:

- **[Topic]** — Something you learned building a NestJS service (e.g. modules, guards, interceptors, testing).
- **[Topic]** — A practical AWS note: how you deployed, monitored, or debugged something.
- **[Topic]** — A Linux tip or workflow you use every day.

## Example code block

```ts
// Code blocks get syntax highlighting automatically.
import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  check() {
    return { status: 'ok' };
  }
}
```

```bash
# And shell snippets too
journalctl -u my-service -f
```
