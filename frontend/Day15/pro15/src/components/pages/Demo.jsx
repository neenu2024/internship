

import React, { useState } from 'react';
// Corrected paths below:
import Button from '../ui/Button';
import Input from '../ui/Input';
import Modal from '../ui/Modal';
import Toast from '../ui/Toast';

const Demo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (msg, type) => {
    setToast({ msg, type });
  };

  return (
    <div className="p-10 max-w-4xl mx-auto space-y-10">
      <h1 className="text-4xl font-bold border-b pb-4">UI Component Library</h1>

      {/* Buttons Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Buttons</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="primary">Primary Action</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="danger" onClick={() => showToast("Deleted successfully!", "error")}>Delete</Button>
          <Button isLoading={true}>Loading...</Button>
        </div>
      </section>

      {/* Inputs Section */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-2xl font-semibold">Inputs</h2>
        <Input label="Email Address" placeholder="Enter your email" />
        <Input label="Password" type="password" error="Password is too short" />
      </section>

      {/* Modal Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Interactive</h2>
        <Button variant="outline" onClick={() => setIsModalOpen(true)}>Open Modal</Button>
        
        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          title="Welcome to our UI Kit"
        >
          <p className="text-gray-600">This is a reusable modal component built with React and Tailwind.</p>
          <div className="mt-6 flex justify-end">
            <Button onClick={() => setIsModalOpen(false)}>Close</Button>
          </div>
        </Modal>
      </section>

      {/* Loader section */}
      <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Loaders</h2>
          <div className="flex items-center space-x-4">
             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
             <p>Processing data...</p>
          </div>
      </section>

      {toast && (
        <Toast 
          message={toast.msg} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}
    </div>
  );
};

export default Demo;