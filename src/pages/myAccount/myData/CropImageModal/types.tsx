export interface ICropImageModal {
  onSave: (files: FileList) => void;
  isOpen: boolean;
  onClose: () => void;
}
