const openButton = document.getElementById("openButton");
const againButton = document.getElementById("againButton");
const intro = document.getElementById("intro");
const letterWrap = document.getElementById("letterWrap");
const messageText = document.getElementById("messageText");
const petalLayer = document.getElementById("petalLayer");
const heartLayer = document.getElementById("heartLayer");
const musicButton = document.getElementById("musicButton");
const musicText = document.getElementById("musicText");
const musicIcon = document.getElementById("musicIcon");
const backgroundMusic = document.getElementById("backgroundMusic");

let typingTimer;
let musicIsPlaying = false;
const loiChucs = [
  "Chúc bạn có một ngày 20/10 thật vui vẻ, luôn giữ được nụ cười trên môi và gặp thật nhiều điều tốt đẹp trong cuộc sống nhé! 🌷",

  "Mong rằng những ngày sắp tới của bạn sẽ luôn ngập tràn niềm vui, mọi chuyện đều thuận lợi và những điều bạn cố gắng sẽ có kết quả thật xứng đáng. 💗",

  "Chúc bạn luôn xinh tươi, vui vẻ và yêu đời. Dù hôm nay có bận rộn hay mệt mỏi thế nào thì cũng nhớ dành cho bản thân một chút thời gian để nghỉ ngơi nhé! 🌸",

  "Nhân ngày 20/10, chúc bạn luôn gặp nhiều may mắn, làm gì cũng thuận lợi, đi đâu cũng gặp người tốt và mỗi ngày đều có một điều gì đó khiến bạn mỉm cười. 🍀",

  "Chúc bạn luôn giữ được sự lạc quan, bình yên trong lòng và nhiệt huyết với những điều mình yêu thích. Hy vọng cuộc sống sẽ đối xử thật dịu dàng với bạn! ☀️",

  "Mong bạn sẽ có thật nhiều ngày vui, ít đi những muộn phiền và luôn đủ mạnh mẽ để vượt qua những lúc khó khăn. Chúc mọi điều tốt đẹp sẽ đến với bạn nhé! 💐",

  "Chúc cô gái luôn rạng rỡ và tràn đầy năng lượng tích cực. Hy vọng bạn sẽ có thêm nhiều trải nghiệm thú vị, gặp được những người chân thành và tạo nên thật nhiều kỷ niệm đẹp. ✨",

  "Chúc bạn không chỉ có một ngày 20/10 vui vẻ mà cả những ngày bình thường sau này cũng luôn có lý do để hạnh phúc, có người để sẻ chia và có điều để mong chờ. 🌻",

  "Mong những dự định của bạn đều dần trở thành hiện thực, những nỗ lực của bạn được đền đáp và con đường phía trước sẽ có thật nhiều cơ hội tốt đang chờ đón. 🍀",

  "Chúc bạn lúc nào cũng vui vẻ, tự tin và tin tưởng vào bản thân mình. Không cần phải hoàn hảo đâu, chỉ cần mỗi ngày đều tốt hơn một chút và sống theo cách khiến mình hạnh phúc là được. 💕",

  "Nhân ngày đặc biệt này, chúc bạn luôn khỏe mạnh, học tập và làm việc thuận lợi, thi cử gặp may mắn và lúc nào cũng giữ được tinh thần thoải mái, yêu đời nhé! 🌷",

  "Chúc bạn có thật nhiều niềm vui nhỏ trong cuộc sống, như một ngày trời đẹp, một món ăn ngon, một lời hỏi thăm đúng lúc hay đơn giản là hoàn thành được việc mình đã đặt ra. ☁️",

  "Hy vọng tuổi trẻ của bạn sẽ có thật nhiều chuyến đi đáng nhớ, những người bạn tốt, những cơ hội mới và những khoảnh khắc mà sau này nghĩ lại vẫn thấy vui. Chúc bạn 20/10 thật ý nghĩa! 🌈",

  "Chúc bạn luôn bình an, gặp chuyện không vui cũng sớm tìm lại được nụ cười, gặp khó khăn vẫn có đủ tự tin để bước tiếp và luôn nhớ rằng những điều tốt đẹp vẫn đang chờ phía trước. 🌼",

  "Mong rằng bạn sẽ luôn được làm những điều mình thích, theo đuổi những mục tiêu mình mong muốn và không quên tận hưởng những niềm vui giản dị trên hành trình trưởng thành của mình. 💗",

  "Chúc bạn mỗi ngày thức dậy đều có thêm một chút động lực, một chút niềm vui và thật nhiều năng lượng tích cực. Mong rằng may mắn sẽ luôn đồng hành cùng bạn trong mọi hành trình! ☀️",

  "Chúc bạn luôn gặp được những người tử tế, nhận được sự quan tâm chân thành và có thật nhiều lý do để cảm thấy biết ơn cuộc sống. Mong những ngày phía trước của bạn sẽ thật nhẹ nhàng và đáng yêu. 🌸",

  "Dù cuộc sống đôi khi có hơi bận rộn và nhiều chuyện phải lo, mong bạn vẫn luôn giữ được sự vui vẻ, biết yêu thương bản thân và tìm thấy niềm vui từ những điều giản dị xung quanh mình. 💐",

  "Chúc bạn có một ngày 20/10 thật nhiều tiếng cười, nhận được những lời chúc dễ thương và gặp toàn chuyện vui. Còn những điều chưa như ý thì mong rằng rồi cũng sẽ ổn cả thôi nhé! 🥰",

  "Cuối cùng, chúc bạn luôn xinh đẹp theo cách riêng của mình, sống vui, sống khỏe, học tập và làm việc thật tốt. Mong mỗi chặng đường bạn đi qua đều có những điều đáng nhớ và những điều tốt đẹp để mỉm cười! 🌷"
];

function randomLoiChuc() {
    const viTri = Math.floor(Math.random() * loiChucs.length);
    document.getElementById("loiChuc").textContent = loiChucs[viTri];
}

// Tạo cánh hoa rơi liên tục.
function createPetal() {
  const petal = document.createElement("span");
  petal.className = "petal";
  petal.textContent = ["🌸", "🌷", "❀", "✿"][Math.floor(Math.random() * 4)];
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.fontSize = `${12 + Math.random() * 17}px`;
  petal.style.setProperty("--drift", `${Math.random() * 180 - 90}px`);
  const duration = 6 + Math.random() * 7;
  petal.style.animationDuration = `${duration}s`;
  petalLayer.appendChild(petal);
  window.setTimeout(() => petal.remove(), duration * 1000);
}

// Tạo trái tim bay lên khi mở thiệp và theo chu kỳ.
function createHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = ["♥", "♡", "💗"][Math.floor(Math.random() * 3)];
  heart.style.left = `${8 + Math.random() * 84}%`;
  heart.style.top = `${55 + Math.random() * 35}%`;
  heart.style.fontSize = `${15 + Math.random() * 22}px`;
  const duration = 3.5 + Math.random() * 2;
  heart.style.animationDuration = `${duration}s`;
  heartLayer.appendChild(heart);
  window.setTimeout(() => heart.remove(), duration * 1000);
}

function typeGreeting() {
  window.clearInterval(typingTimer);
  messageText.textContent = "";

  // Chọn ngẫu nhiên một lời chúc
  const viTri = Math.floor(Math.random() * loiChucs.length);
  const greeting = loiChucs[viTri];

  let index = 0;
  typingTimer = window.setInterval(() => {
    messageText.textContent += greeting.charAt(index);
    index += 1;

    if (index >= greeting.length) {
      window.clearInterval(typingTimer);
    }
  }, 65);
}

async function openCard() {
    intro.style.display = "none";
    letterWrap.classList.add("show");
    letterWrap.setAttribute("aria-hidden", "false");

    typeGreeting();

    // Tự phát nhạc khi người nhận mở thiệp
    if (!musicIsPlaying) {
        try {
            await backgroundMusic.play();
            musicIsPlaying = true;
            musicButton.classList.add("is-playing");
            musicButton.setAttribute("aria-pressed", "true");
            musicIcon.textContent = "♫";
            musicText.textContent = "Đang phát nhạc";
        } catch (error) {
            musicText.textContent = "Bấm để bật nhạc";
        }
    }

    for (let i = 0; i < 18; i++) {
        window.setTimeout(createHeart, i * 100);
    }
}
openButton.addEventListener("click", openCard);
againButton.addEventListener("click", () => {
  typeGreeting();
  for (let i = 0; i < 8; i++) window.setTimeout(createHeart, i * 120);
});

// Nhạc chỉ phát sau khi người dùng bấm nút, theo quy tắc autoplay của trình duyệt.
musicButton.addEventListener("click", async () => {
  if (!musicIsPlaying) {
    try {
      await backgroundMusic.play();
      musicIsPlaying = true;
      musicButton.classList.add("is-playing");
      musicButton.setAttribute("aria-pressed", "true");
      musicIcon.textContent = "♫";
      musicText.textContent = "Đang phát nhạc";
    } catch (error) {
      musicText.textContent = "Thêm file music/music.mp3";
      console.info("Hãy thêm file nhạc MP3 vào thư mục music.", error);
    }
  } else {
    backgroundMusic.pause();
    musicIsPlaying = false;
    musicButton.classList.remove("is-playing");
    musicButton.setAttribute("aria-pressed", "false");
    musicIcon.textContent = "♫";
    musicText.textContent = "Bật nhạc";
  }
});

// Rải hoa nền ngay khi trang mở, sau đó tiếp tục tạo hoa mới.
for (let i = 0; i < 18; i++) {
  window.setTimeout(createPetal, i * 250);
}
window.setInterval(createPetal, 650);
window.setInterval(createHeart, 1500);
