import React, { useRef, useState } from "react";
import AddressCard from "./AddressCard";
import Button from "../../components/UI/Button";
import AddressFormModal from "./AddressFormModal";
import useCreateAddress from "../../hooks/useCreateAddress";
import useDeleteAddress from "../../hooks/useDeleteAddress";
import useUpdateAddress from "../../hooks/useUpdateAddress";
import { ChevronLeft } from "lucide-react";

const Addresses = ({ addresses, isFetching, errorInFetching, setActiveToNull }) => {
  const modalRef = useRef(null);
  const { createAddress, isLoading, error } = useCreateAddress();

  const { updateAddress } = useUpdateAddress()
  const { deleteAddress } = useDeleteAddress()
  const [address, setAddress] = useState(null)

  const handleOpenModal = (data) => {
    if (data) {
      setAddress(data)
    }
    else {
      setAddress(false)
    }
    modalRef.current.showModal();
  };
  const handleCloseModal = () => {
    modalRef.current.close();
    setAddress(null)
  };

  return (
    <div className="flex flex-col flex-grow p-[20px] rounded-[10px] gap-[16px]">
      <dialog ref={modalRef} className="w-1/2 p-[20px] rounded-[10px]">
        {
          address !== null ? <AddressFormModal
            handleCloseModal={handleCloseModal}
            handler={address ? updateAddress : createAddress}
            address={address}
            error={error}
          /> : "Loading..."
        }

      </dialog>

      <div className="flex justify-between items-center">
        <p className="text-[length:var(--md-text)] flex items-center" onClick={setActiveToNull}> <ChevronLeft size={20} className="sm:hidden" /> Address Book</p>
        <Button bg={"transparent"} border={"grey"} onClick={() => handleOpenModal(false)}>
          Add Address
        </Button>
      </div>
      {
        errorInFetching ? errorInFetching : isFetching ? "Loading..." : addresses.length > 0 ? <div className="flex flex-col gap-[20px]">
          {addresses?.map((address) => {
            return <AddressCard key={address._id} address={address} handleDelete={(id) => {deleteAddress(id)}} handleOpenModal={handleOpenModal} />;
          })}
        </div> : "No Addresses to show"
      }
    </div>
  );
};

export default Addresses;
