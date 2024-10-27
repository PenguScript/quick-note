import { ActionButton, ActionButtonProps } from "@/components";
import { createEmptyNoteAtom } from "@renderer/store";
import { useSetAtom } from "jotai";
import { MdOutlineNoteAdd } from "react-icons/md";

export const NewNoteButton = ({...props}: ActionButtonProps) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  const handleCreation = async () => {
    await createEmptyNote()
  }

  return (
    <ActionButton onClick={handleCreation} {...props}>
      <MdOutlineNoteAdd className="w-4 h-4 text-neutral-300"/>
    </ActionButton>
  );
}