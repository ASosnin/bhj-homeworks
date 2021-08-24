const ready = () => {
  const CLASS_NAME_SHOW_MODAL = "modal_active";
  const CLASS_NAME_HIDE_MODAL = "modal__close";
  const CLASS_NAME_SHOW_SUCCESS_ACTION = "show-success";
  const ModalMain = document.getElementById("modal_main");
  const ModalSuccess = document.getElementById("modal_success");

  const onShowModal = (modalElement) => {
    modalElement.classList.add(CLASS_NAME_SHOW_MODAL);
  };

  const onHideModal = (modalElement) => {
    modalElement.classList.remove(CLASS_NAME_SHOW_MODAL);
  };

  for (let item of ModalMain.getElementsByClassName(CLASS_NAME_HIDE_MODAL)) {
    item.onclick = () => {
      onHideModal(ModalMain);
    };
  }

  for (let item of ModalSuccess.getElementsByClassName(CLASS_NAME_HIDE_MODAL)) {
    item.onclick = () => {
      onHideModal(ModalSuccess);
    };
  }

  for (let item of ModalMain.getElementsByClassName(
    CLASS_NAME_SHOW_SUCCESS_ACTION
  )) {
    item.onclick = () => {
      onHideModal(ModalMain);
      onShowModal(ModalSuccess);
    };
  }

  onShowModal(ModalMain);
};

document.addEventListener("DOMContentLoaded", ready);
