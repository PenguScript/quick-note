import { deleteNoteAtom } from "@renderer/store";
import { ActionButton, ActionButtonProps } from "./ActionButton";
import { IoMdTrash } from "react-icons/io";
import { useSetAtom } from "jotai";

export const DeleteNoteButton = ({...props}: ActionButtonProps) => {
const deleteNote = useSetAtom(deleteNoteAtom)

  const handleDelete = async () => {
    await deleteNote()
  }

  return (
    <ActionButton onClick={handleDelete} {...props}>
      <IoMdTrash className="w-4 h-4 text-neutral-300"/>
    </ActionButton>
  );
}