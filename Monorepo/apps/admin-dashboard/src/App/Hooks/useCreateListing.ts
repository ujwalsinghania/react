// react
import { useState } from 'react';

// utils
import { slugify } from '@local/common/utils';

export const useCreateListing = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    price: '',
    description: '',
    available: false,
  });

  const handlePublish = () => {
    alert(
      `Listing Created: ${slugify(formData.name)}\nData: ${JSON.stringify(
        formData,
        null,
        2
      )}`
    );
  };

  return { formData, setFormData, handlePublish };
};
