import { useState } from "react";
import { Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
// import { Button } from "@/components/ui/button";

export default function CodeBlock({
  code = "hello world",
  language = "javascript",
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg shadow-md">
      <button
        className="absolute -top-3 right-1 p-2 text-sm text-gray-500 bg-gray-100 rounded-md flex gap-2 cursor-pointer"
        onClick={handleCopy}
      >
        <Copy size={14} /> {copied ? "Copied!" : "Copy"}
      </button>

      <SyntaxHighlighter
        language={language}
        style={oneDark}
        className="rounded-md p-2"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
