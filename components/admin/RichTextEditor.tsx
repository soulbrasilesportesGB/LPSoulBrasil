'use client';

import { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Bold,
  Italic,
  Heading2,
  List,
  ListOrdered,
  Quote,
  Link2,
  Image as ImageIcon,
  Undo2,
  Redo2,
} from 'lucide-react';

type RichTextEditorProps = {
  value: string;
  onChange: (html: string) => void;
  label?: string;
  description?: string;
  error?: string;
  placeholder?: string;
};

export function RichTextEditor({
  value,
  onChange,
  label,
  description,
  error,
  placeholder = 'Escreva o conteúdo do post aqui...',
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [2, 3],
        },
      }),
      Link.configure({
        openOnClick: false,
        linkOnPaste: true,
      }),
      Image,
    ],
    content: value || '',
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          'prose prose-sm md:prose base max-w-none focus:outline-none min-h-[240px]',
      },
    },
  });

  // Mantém conteúdo em sincronia quando vier de fora (ex.: modo edição)
  useEffect(() => {
  if (!editor) return;

  const current = editor.getHTML();

  if (value && value !== current) {
    editor.commands.setContent(value, { emitUpdate: false });
  } else if (!value && current !== '') {
    editor.commands.clearContent();
  }
}, [value, editor]);

  if (!editor) {
    return (
      <div className="space-y-2">
        {label && <Label>{label}</Label>}
        <div className="rounded-md border border-gray-200 p-4 text-sm text-gray-500">
          Carregando editor...
        </div>
      </div>
    );
  }

  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href as string | undefined;
    const url = window.prompt('Digite a URL do link:', previousUrl ?? '');

    if (url === null) return;
    if (url === '') {
      editor.chain().focus().unsetLink().run();
      return;
    }

    editor
      .chain()
      .focus()
      .extendMarkRange('link')
      .setLink({ href: url })
      .run();
  };

  // por enquanto, imagem só via URL (upload Supabase vem no próximo passo)
  const insertImageByUrl = () => {
    const url = window.prompt('URL da imagem:');
    if (!url) return;
    editor.chain().focus().setImage({ src: url }).run();
  };

  return (
    <div className="space-y-2">
      {label && <Label>{label}</Label>}
      {description && (
        <p className="text-xs text-gray-500 mb-1">{description}</p>
      )}

      <div className="rounded-md border border-gray-200 bg-white">
        {/* Toolbar */}
        <div className="border-b border-gray-200 bg-gray-50 px-2 py-1 flex flex-wrap gap-1">
          <Button
            type="button"
            variant={editor.isActive('bold') ? 'default' : 'outline'}
            size="icon"
            className="h-8 w-8"
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            <Bold className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant={editor.isActive('italic') ? 'default' : 'outline'}
            size="icon"
            className="h-8 w-8"
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            <Italic className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant={editor.isActive('heading', { level: 2 }) ? 'default' : 'outline'}
            size="icon"
            className="h-8 w-8"
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          >
            <Heading2 className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant={editor.isActive('bulletList') ? 'default' : 'outline'}
            size="icon"
            className="h-8 w-8"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          >
            <List className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant={editor.isActive('orderedList') ? 'default' : 'outline'}
            size="icon"
            className="h-8 w-8"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
          >
            <ListOrdered className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant={editor.isActive('blockquote') ? 'default' : 'outline'}
            size="icon"
            className="h-8 w-8"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
          >
            <Quote className="h-4 w-4" />
          </Button>

          <div className="w-px h-6 bg-gray-200 mx-1" />

          <Button
            type="button"
            variant={editor.isActive('link') ? 'default' : 'outline'}
            size="icon"
            className="h-8 w-8"
            onClick={setLink}
          >
            <Link2 className="h-4 w-4" />
          </Button>

          <Button
            type="button"
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={insertImageByUrl}
          >
            <ImageIcon className="h-4 w-4" />
          </Button>

          <div className="w-px h-6 bg-gray-200 mx-1" />

          <Button
            type="button"
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => editor.chain().focus().undo().run()}
          >
            <Undo2 className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => editor.chain().focus().redo().run()}
          >
            <Redo2 className="h-4 w-4" />
          </Button>
        </div>

        {/* Área do editor */}
        <div className="p-3">
          {!value && (
            <p className="text-xs text-gray-400 mb-1">{placeholder}</p>
          )}
          <EditorContent editor={editor} />
        </div>
      </div>

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
