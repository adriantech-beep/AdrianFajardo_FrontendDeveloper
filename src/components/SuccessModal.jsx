import { Dialog } from "@headlessui/react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const SuccessModal = ({ showSuccessModal, setShowSuccessModal }) => {
  return (
    <AnimatePresence>
      {showSuccessModal && (
        <Dialog
          open={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            style={{
              backgroundImage:
                "radial-gradient(white 1px, transparent 1px), radial-gradient(white 1px, transparent 1px)",
              backgroundSize: "3px 3px",
              backgroundPosition: "0 0, 1.5px 1.5px",
              opacity: 0.05,
              zIndex: -1,
            }}
            aria-hidden="true"
          />

          <Motion.div
            className="bg-[#0f172a] text-white p-6 rounded-xl shadow-2xl w-full max-w-md z-50"
            initial={{ opacity: 0, scale: 0.8, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Dialog.Title className="text-cyan-400 text-xl font-bold mb-2 text-center">
              🚀 Message Sent!
            </Dialog.Title>
            <Dialog.Description className="text-white/70 text-center mb-4">
              I’ve received your transmission. I’ll respond from orbit shortly.
            </Dialog.Description>

            <button
              onClick={() => setShowSuccessModal(false)}
              className="mt-4 w-full px-4 py-2 bg-cyan-500 rounded hover:bg-cyan-400 transition active:scale-95 font-semibold"
            >
              Close
            </button>
          </Motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
