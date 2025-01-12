import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ImageViewerProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  alt: string;
}

export function ImageViewer({ isOpen, onClose, imageUrl, alt }: ImageViewerProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 flex items-center justify-center">
        <div className="relative w-full h-full overflow-auto">
          <img
            src={imageUrl}
            alt={alt}
            className="w-auto h-auto max-w-full max-h-[90vh] object-contain mx-auto"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}