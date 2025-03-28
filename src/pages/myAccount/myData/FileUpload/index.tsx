import { ChangeEvent, forwardRef } from 'react';

import { IFileUpload } from './types';

export const FileUpload = forwardRef<HTMLInputElement, IFileUpload>(
  ({ onChange }, ref) => {
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        onChange(e.target.files);
      }
    };

    return (
      <div className="space-y-2">
        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-700 rounded-lg cursor-pointer hover:border-primary-500 transition-colors">
          <div className="text-center">
            <span className="text-gray-500">
              Clique para adicionar uma foto
            </span>
          </div>
          <input
            type="file"
            ref={ref}
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>
      </div>
    );
  }
);
