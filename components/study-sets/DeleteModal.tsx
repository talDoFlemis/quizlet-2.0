import { Dialog, Transition } from "@headlessui/react"
import { XIcon } from "@heroicons/react/outline"
import request, { gql } from "graphql-request"
import { useRouter } from "next/router"
import React, { Fragment } from "react"
import { DeckData } from "typings"

interface Props {
  deleteModalVisible: boolean
  setDeleteModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  deck: DeckData
}

function DeleteModal({
  deleteModalVisible,
  setDeleteModalVisible,
  deck,
}: Props) {
  const router = useRouter()

  const deleteDeck = async () => {
    const query = gql`
      mutation RemoveUserDeck($where: DeckWhereUniqueInput!) {
        removeUserDeck(where: $where) {
          id
        }
      }
    `
    const deckToRemove = {
      where: {
        id: deck.id,
      },
    }

    try {
      const resp = await request("/api/graphql", query, deckToRemove)
      console.log(resp)
      router.push("/latest")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Transition appear show={deleteModalVisible} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={() => setDeleteModalVisible(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black/70  " />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="my-8 inline-block w-full max-w-xl transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="div"
                  className="flex items-center justify-between bg-[#4257b2] p-6 text-3xl font-bold text-white"
                >
                  <h1>Delete this set?</h1>
                  <div
                    className="cursor-pointer rounded-full border-4 border-[#3b4c9b] transition-colors hover:bg-[#3b4c9b]"
                    onClick={() => setDeleteModalVisible(false)}
                  >
                    <XIcon className="h-10 w-10 p-1" />
                  </div>
                </Dialog.Title>
                <div className="mt-2 p-6">
                  <h1 className="text-4xl font-bold">{deck?.title}</h1>
                  <p className="mt-8 text-sm text-gray-500">
                    You are about to delete this set and all of its data. No one
                    will be able to access this set ever again.
                  </p>
                  <p className="mt-8 text-sm  font-bold">
                    Are you absolutely positive? There&apos;s no undo.
                  </p>
                </div>

                <div className="flex justify-between gap-6 p-6">
                  <button
                    className="inline-flex w-1/2 justify-center rounded-sm border-none bg-[#303545] px-8 py-4 text-lg font-bold text-white hover:bg-[#4f5774]"
                    onClick={() => setDeleteModalVisible(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="inline-flex w-1/2 justify-center rounded-sm border-none bg-[#ff725b] px-8 py-4 text-lg font-bold text-white hover:bg-[#f38271]"
                    onClick={() => deleteDeck()}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default DeleteModal
