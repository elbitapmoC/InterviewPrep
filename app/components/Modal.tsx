"use client";

import React from "react";
import { useModalContext } from "../context/ModalContext";

const Modal = () => {
  const { isModalOpen, closeModal, modalData } = useModalContext();

  if (!isModalOpen || !modalData) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={closeModal}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-lg shadow-lg dark:bg-gray-700 p-6 space-y-6 transform transition-all duration-300 ease-in-out"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <header className="flex items-center justify-between border-b pb-4">
          <h2
            id="modal-title"
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            {modalData.name}
          </h2>
          <button
            onClick={closeModal}
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            aria-label="Close"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </header>

        {/* Recipe Image */}
        <figure className="w-full h-64 relative rounded-lg overflow-hidden">
          <img
            src={modalData.image}
            alt={modalData.name}
            className="object-cover w-full h-full"
          />
        </figure>

        {/* Ingredients Section */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Ingredients
          </h3>
          <ul
            id="modal-description"
            className="list-disc list-inside text-gray-700 dark:text-gray-400"
          >
            {modalData.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </section>

        {/* Instructions Section */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Instructions
          </h3>
          <ol className="list-decimal list-inside text-gray-700 dark:text-gray-400 space-y-2">
            {modalData.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </section>

        {/* Additional Recipe Details */}
        <footer className="flex justify-between items-center border-t pt-4 text-sm text-gray-600 dark:text-gray-400">
          <div>
            <span className="font-semibold">Tags:</span>{" "}
            {modalData.tags.join(", ")}
          </div>
          <div>
            <span className="font-semibold">Rating:</span> {modalData.rating}/5
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
