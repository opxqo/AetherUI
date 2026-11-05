// Explicit minimal business inputs for each data-driven component.
export const businessProps = {
  "ai-answer": {
    "sources": [],
    "answer": "验收内容",
    "question": "验收问题",
    "animate": false
  },
  "chat-composer": {
    "models": []
  },
  "thinking-state": {
    "steps": []
  },
  "writing-assistant": {
    "suggestions": []
  },
  "thinking-loader": {
    "phases": []
  },
  "combobox": {
    "options": [],
    "value": [],
    "defaultValue": []
  },
  "command-menu": {
    "groups": []
  },
  "date-range-picker": {
    "presets": []
  },
  "dropzone": {
    "accept": []
  },
  "segmented-control": {
    "options": []
  },
  "stepper-form": {
    "steps": [
      {
        "id": "one",
        "title": "Start", "render": () => null
      }
    ],
    "initialValues": {}
  },
  "usage-meter": {
    "total": 100,
    "used": []
  },
  "agent-checkpoints": {
    "checkpoints": []
  },
  "agent-cursors": {
    "agents": [],
    "blocks": [],
    "comments": [],
    "suggestions": []
  },
  "agent-findings": {
    "agents": [],
    "findings": []
  },
  "agent-fleet": {
    "agents": [],
    "steps": []
  },
  "agent-graph": {
    "nodes": [],
    "calls": [],
    "edges": []
  },
  "agent-handoff": {
    "agents": [],
    "handoffs": [],
    "items": [],
    "tasks": []
  },
  "agent-inbox": {
    "tasks": [
      {
        "id": "review",
        "title": "验收业务任务",
        "agent": "Release assistant",
        "status": "waiting"
      }
    ]
  },
  "agent-lanes": {
    "agents": [],
    "tasks": []
  },
  "agent-ledger": {
    "entries": [],
    "dependsOn": []
  },
  "agent-monitor": {
    "steps": []
  },
  "agent-queue": {
    "jobs": [],
    "workers": [],
    "rateLimits": []
  },
  "agent-recap": {
    "events": []
  },
  "agent-steering": {
    "steps": [],
    "queue": []
  },
  "autonomy-dial": {
    "actions": [],
    "pinned": [],
    "defaultPinned": []
  },
  "cited-answer": {
    "segments": [],
    "sources": []
  },
  "compact-breakdown": {
    "items": [],
    "periods": []
  },
  "conflict-radar": {
    "agents": [],
    "files": []
  },
  "context-map": {
    "blocks": []
  },
  "context-window": {
    "parts": []
  },
  "cost-waterfall": {
    "steps": []
  },
  "decision-tree": {
    "decisions": [],
    "options": [],
    "effects": []
  },
  "delegate-board": {
    "agents": [],
    "tasks": []
  },
  "experiment-card": {
    "variants": [],
    "metrics": []
  },
  "fallback-chain": {
    "attempts": []
  },
  "fan-out-grid": {
    "tasks": []
  },
  "integration-picker": {
    "integrations": []
  },
  "integration-settings": {
    "name": "GitHub",
    "meta": "Workspace",
    "defaultValues": {}
  },
  "kpi-chart": {
    "labels": [],
    "tooltipLabels": [],
    "series": []
  },
  "memory-panel": {
    "memories": [],
    "categories": []
  },
  "message-actions": {
    "actions": [],
    "versions": [],
    "reasons": []
  },
  "model-picker": {
    "models": []
  },
  "parallel-attempts": {
    "attempts": []
  },
  "permission-request": {
    "agent": {
      "name": "Reviewer"
    },
    "action": "Review",
    "target": "release",
    "reason": "Acceptance"
  },
  "plan-vs-actual": {
    "steps": [],
    "deps": []
  },
  "profile-menu": {
    "items": []
  },
  "project-card": {
    "tasks": [],
    "statuses": [],
    "members": []
  },
  "prompt-library": {
    "templates": []
  },
  "review-center": {
    "items": [],
    "files": [],
    "steps": [],
    "reasons": []
  },
  "scheduled-runs": {
    "tasks": [],
    "days": [],
    "sessions": [],
    "agents": []
  },
  "tips-panel": {
    "tips": []
  },
  "tool-access-map": {
    "agents": [],
    "tools": [],
    "calls": []
  },
  "approval-card": {
    "details": []
  },
  "breakdown-chart": {
    "records": [],
    "dimensions": [],
    "measures": []
  },
  "data-table": {
    "columns": [],
    "rows": []
  },
  "filter-menu": {
    "groups": [],
    "defaultOpen": []
  },
  "reaction-bar": {
    "actions": []
  },
  "smart-recommendation": {
    "options": []
  },
  "agent-plan": {
    "steps": [],
    "defaultSteps": []
  },
  "billing-schedule": {
    "catalog": [],
    "defaultLines": []
  },
  "change-summary": {
    "changes": []
  },
  "comments-panel": {
    "comments": []
  },
  "email-draft": {
    "contacts": [],
    "tones": []
  },
  "progress-tracker": {
    "steps": []
  },
  "comment-thread": {
    "messages": []
  },
  "inline-diff": {
    "changes": []
  },
  "setup-guide": {
    "groups": []
  },
  "decision-inbox": {
    "decisions": []
  },
  "notification-stack": {
    "notices": []
  },
  "app-shell-flat": {
    "nav": [],
    "projects": [],
    "chats": [],
    "groups": []
  },
  "app-shell": {
    "nav": [],
    "projects": [],
    "chats": []
  },
  "agent-run": {
    "steps": []
  },
  "crm": {
    "companies": []
  },
  "kanban": {
    "columns": [],
    "cards": []
  },
  "analytics": {
    "stats": [],
    "breakdown": [],
    "products": [],
    "channels": []
  },
  "onboarding": {
    "defaultInvites": []
  },
  "settings-preferences": {
    "providers": []
  },
  "settings-members": {
    "members": [],
    "teams": []
  },
  "settings-models": {
    "providers": [],
    "keys": []
  },
  "client-context": {
    "clients": []
  },
  "invoice-credit": {
    "lines": []
  },
  "logo-marquee": {
    "logos": []
  },
  "metrics-dashboard": {
    "data": [],
    "products": [],
    "channels": []
  },
  "pricing-plans": {
    "plans": []
  },
  "task-board": {
    "tasks": [],
    "statuses": [],
    "labels": [],
    "people": [],
    "path": []
  },
  "testimonial-wall": {
    "items": []
  },
  "ai-workspace": {
    "pinned": [],
    "conversations": [],
    "projects": []
  },
  "app-directory": {
    "apps": [],
    "categories": []
  },
  "kpi-board": {
    "ranges": [
      {
        "id": "week",
        "label": "Week"
      }
    ],
    "data": {
      "week": {
        "stats": [],
        "overview": {
          "labels": [],
          "current": [],
          "previous": []
        },
        "focus": {
          "value": 0
        }
      }
    }
  },
  "agent-gallery": {
    "items": []
  },
  "cover-flow": {
    "items": []
  },
  "glow-keyboard": {
    "prompts": []
  },
  "integration-beam": {
    "left": [],
    "right": []
  },
  "model-wheel": {
    "models": []
  },
  "integration-flow": {
    "items": []
  },
  "layer-stack": {
    "items": []
  },
  "integration-grid": {
    "logos": []
  },
  "gradient-text": {
    "colors": []
  },
  "agent-tree": {
    "root": {
      "id": "root",
      "name": "Root",
      "task": "Review",
      "status": "done",
      "children": []
    }
  },
  "trace-waterfall": {
    "root": {
      "id": "root",
      "name": "Run",
      "kind": "agent",
      "status": "done",
      "start": 0,
      "end": 100,
      "children": []
    }
  },
  "button": {
    "children": "保存"
  },
  "text-reveal": {
    "children": "验收内容"
  },
  "team-invite": {
    "avatars": []
  }
};
businessProps['agent-recap'] = { events: [], since: 0, until: 1000 };
businessProps['comments-panel'] = { comments: [], currentUser: { name: 'Reviewer' } };
businessProps['kpi-board'].data.week.focus = { title: 'Focus', metric: 'Revenue', labels: [], values: [], previous: 0 };
businessProps['team-invite'] = { avatars: [1, 2, 3].map(i => ({ src: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>`, name: `Member ${i}` })) };
businessProps['agent-team'] = { members: [1, 2, 3].map(i => ({ avatar: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>`, role: `Reviewer ${i}` })) };
businessProps['text-reveal'] = { text: '验收内容' };
