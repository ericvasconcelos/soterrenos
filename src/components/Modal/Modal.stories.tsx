import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Modal } from '.';
import { Button } from '../Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

const ModalStory = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Button color="danger" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div className="p-4">Modal Content</div>
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: () => <ModalStory />,
};
