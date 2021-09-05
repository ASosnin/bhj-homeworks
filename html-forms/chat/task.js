const ELLA_WORDS = [
  "Хамите",
  "Хо-хо!",
  "Знаменито.",
  "Мрачный.",
  "Мрак.",
  "Жуть.",
  "Парниша.",
  "Не учите меня жить.",
  "Как ребенка.",
  "Кр-р-расота!",
  "Толстый и красивый.",
  "Поедем на извозчике.",
  "Поедем в таксо.",
  "У вас вся спина белая.",
  "Подумаешь!",
  "Уля.",
  "Ого!",
];

const getRandomFromDictionary = (listWords) => {
  const idx = Math.floor(Math.random() * listWords.length);
  return listWords[idx];
};

const ready = () => {
  const ChatWidget = document.querySelector(".chat-widget");
  const chatWidgetSide = ChatWidget.querySelector(".chat-widget__side");
  const MessagesArea = ChatWidget.querySelector(".chat-widget__messages");
  const ChatInput = document.getElementById("chat-widget__input");

  let dialogStarted = false;

  const getTimeString = () => {
    const formatXX = (value) => {
      const valueString = value.toString();
      return valueString.length > 1 ? valueString : `0${valueString}`;
    };

    const now = new Date();
    const hours = now.getHours();
    const minute = now.getMinutes();

    return `${formatXX(hours)}:${formatXX(minute)}`;
  };

  const addMessage = (message, isClient = false) => {
    const messageClass = isClient ? "message message_client" : "message";
    const time = getTimeString();
    MessagesArea.innerHTML += `
      <div class="${messageClass}">
        <div class="message__time">${time}</div>
        <div class="message__text">
           ${message}
        </div>
      </div>
    `;
    onScroll();
  };

  chatWidgetSide.addEventListener("click", () => {
    ChatWidget.classList.add("chat-widget_active");
    setTimeout(() => {
      if (!dialogStarted) {
        dialogStarted = true;
        onRobotResponse();
      }
    }, 30000);
  });

  const onRobotResponse = () => {
    addMessage(getRandomFromDictionary(ELLA_WORDS));
  };

  const onScroll = () => {
    const elements = MessagesArea.querySelectorAll(".message");
    elements.item(elements.length - 1).scrollIntoView();
  };

  const onChangeChatInput = (event) => {
    dialogStarted = true;
    const messageClientString = event.target.value.trim();
    addMessage(messageClientString, true);
    event.target.value = "";
    onRobotResponse();
  };

  ChatInput.addEventListener("change", onChangeChatInput);
};

document.addEventListener("DOMContentLoaded", ready);
