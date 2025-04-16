import { useCallback, useMemo, useState } from 'react';
import type { Area, Point } from 'react-easy-crop';
import Cropper from 'react-easy-crop';

import { Button, Modal } from '@/components';

import { FileUpload } from '../FileUpload';
import { useUploadProfileImage } from '../hooks';
import { ICropImageModal } from './types';
import { getCroppedImg } from './utils';

export const CropImageModal = ({ isOpen, onClose }: ICropImageModal) => {
  const [image, setImage] = useState<FileList>();
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>();
  const previewUrl = useMemo(
    () => (image?.[0] ? URL.createObjectURL(image[0]) : ''),
    [image]
  );

  const { mutateAsync: uploadImage, status } = useUploadProfileImage();

  const onCropComplete = useCallback((_: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleSaveImage = useCallback(async () => {
    if (!previewUrl || !croppedAreaPixels || !image?.[0]) return;

    try {
      const croppedBlob = await getCroppedImg(previewUrl, croppedAreaPixels);
      const croppedFile = new File([croppedBlob], image[0].name, {
        type: 'image/jpeg',
        lastModified: Date.now(),
      });
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(croppedFile);
      const file = dataTransfer.files[0];

      await uploadImage(file);
      onClose();
    } catch (error) {
      console.error('Error cropping image:', error);
    }
  }, [previewUrl, croppedAreaPixels, image, uploadImage, onClose]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="mt-8 mb-6">
        <FileUpload onChange={(files) => setImage(files)} />
      </div>

      {image?.[0] && (
        <div className="relative w-full h-[400px]">
          <Cropper
            image={previewUrl}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </div>
      )}

      <div className="flex justify-end mt-8">
        <Button
          type="button"
          onClick={handleSaveImage}
          disabled={!previewUrl}
          isLoading={status === 'pending'}
        >
          Salvar Imagem
        </Button>
      </div>
    </Modal>
  );
};
