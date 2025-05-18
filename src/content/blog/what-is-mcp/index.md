---
title: What is MCP (Model Context Protocol (MCP))?
description: A brief overview of what MCP is and how it works
slug: what-is-mcp
date: 2025-04-28
draft: false
---

The **Model Context Protocol (MCP)** is an open standard introduced by Anthropic in November 2024.
It aims to standardize how large language models (LLMs) connect with external tools, systems, and data sources.
Think of MCP as the "USB-C for AI"—a universal interface that simplifies and unifies how AI models interact with the broader software ecosystem.  
[modelcontextprotocol.io](https://modelcontextprotocol.io/introduction)

---

## 🔧 How MCP Works

MCP operates on a client-server architecture:

- **MCP Clients**: AI applications (e.g., chatbots, IDE assistants) that request context or perform actions.
- **MCP Servers**: Services that expose APIs or data sources (e.g., GitHub, Notion, Google Drive) in a standardized format.

Communication between clients and servers follows the JSON-RPC protocol, ensuring a consistent and language-agnostic method for exchanging information.  
[modelcontextprotocol.io](https://modelcontextprotocol.io/introduction)

---

## 🧪 Example: AI Assistant Managing GitHub PRs and Notion Documentation

Imagine you're a developer who wants your AI assistant to review GitHub pull requests (PRs) and document summaries in Notion. Here's how MCP facilitates this integration:

1. **MCP Server Setup**: A server is configured to connect with GitHub's API to fetch PR details and with Notion's API to create or update pages.
2. **AI Client Interaction**: The AI assistant, acting as an MCP client, sends a request to the MCP server to retrieve PR information.
3. **Processing and Response**: The MCP server processes the request, obtains the necessary data from GitHub, and returns it to the AI assistant.
4. **Documentation**: The AI assistant analyzes the PR, generates a summary, and sends another request to the MCP server to document this summary in Notion.  
   [datacamp.com](https://www.datacamp.com/tutorial/mcp-model-context-protocol)

This setup allows the AI to seamlessly interact with both GitHub and Notion, automating the PR review and documentation process.

---

## 🚀 Benefits of MCP

- **Standardization**: Provides a unified protocol for connecting AI models with diverse tools and data sources, reducing the need for custom integrations.
- **Flexibility**: Supports various programming languages and platforms, allowing developers to implement MCP servers that suit their specific needs.
- **Scalability**: Enables AI applications to interact with multiple services simultaneously, promoting scalable and efficient workflows.
- **Security**: Facilitates secure data exchange between AI models and external systems, maintaining data integrity and privacy.

---

## 📚 Learn More

- [Official MCP Introduction](https://modelcontextprotocol.io/introduction)
- [GitHub: MCP Example Servers](https://github.com/modelcontextprotocol/servers)
- [Notion's MCP Server Implementation](https://github.com/awkoy/notion-mcp-server)
- [Tutorial: Building an MCP-Powered PR Review Server](https://www.datacamp.com/tutorial/mcp-model-context-protocol)

---

By adopting the Model Context Protocol, developers and organizations can enhance the capabilities of AI applications, enabling them to perform complex tasks by interacting with a wide range of tools and data sources in a standardized and efficient manner.
