'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

type Props = {
  url: string;
  title: string;
  text?: string;
};

export default function ShareButtons({ url, title, text }: Props) {
  const shareText = text ?? title;

  const open = (href: string) => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-wrap gap-3">
      <Button
        variant="outline"
        className="flex items-center gap-2"
        onClick={() =>
          open(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`
          )
        }
      >
        <Facebook className="h-4 w-4" />
        Facebook
      </Button>

      <Button
        variant="outline"
        className="flex items-center gap-2"
        onClick={() =>
          open(
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url
            )}&text=${encodeURIComponent(shareText)}`
          )
        }
      >
        <Twitter className="h-4 w-4" />
        Twitter
      </Button>

      <Button
        variant="outline"
        className="flex items-center gap-2"
        onClick={() =>
          open(
            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              url
            )}`
          )
        }
      >
        <Linkedin className="h-4 w-4" />
        LinkedIn
      </Button>
    </div>
  );
}