"use client";

import { Modal } from "./Modal";
import { Button } from "@/components/ui/Button";

export function ConfirmDialog({
  open, title, description, confirmText = "ยืนยัน", cancelText = "ยกเลิก", onConfirm, onClose
}: {
  open: boolean;
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onClose: () => void;
}) {
  return (
    <Modal open={open} title={title} onClose={onClose}>
      {description ? <div className="text-sm text-slate-600">{description}</div> : null}
      <div className="mt-4 flex justify-end gap-2">
        <Button variant="ghost" onClick={onClose}>{cancelText}</Button>
        <Button onClick={() => { onConfirm(); onClose(); }}>{confirmText}</Button>
      </div>
    </Modal>
  );
}
