import { createStorybookVariant } from '$/client-shared'
import { AnimationDecorator } from '$/client-shared'
import type { Meta } from '@storybook/react'
import { Modal, ModalProps } from './modal'

const Story: Meta<typeof Modal> = {
  component: Modal,
  title: 'ui/modal',
  decorators: [AnimationDecorator]
}

const variant = createStorybookVariant<ModalProps>({
  isOpen: true,
  onClose: () => {},
  width: 50,
  height: 70
})

export const Default = variant()

export default Story
