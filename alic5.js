const alic5 = () => {
  const element_canvas = document.getElementsByTagName("canvas")[0];

  if (!element_canvas) return;

  const context_canvas = element_canvas.getContext("2d");

  if (!context_canvas) return;

  const position = {
    x: 5555,
    y: 5555,
  };

  context_canvas.translate(element_canvas.width / 2, element_canvas.height / 2);

  const alic5_frame = () => {
    context_canvas.fillStyle = "#ffffff90";
    context_canvas.strokeStyle = "#000000";

    context_canvas.fillRect(0, 0, element_canvas.width, element_canvas.height);

    context_canvas.beginPath();
    context_canvas.moveTo(position.x, position.y);

    position.x *= -1.0;
    position.y *= -1.0;

    context_canvas.lineTo(position.x, position.y);

    context_canvas.lineTo(position.x + 1000, position.y - 100);
    context_canvas.lineTo(position.x + 600, position.y - 460);
    context_canvas.lineTo(position.x - 1000, position.y + 300);
    context_canvas.lineTo(position.x + 2600, position.y - 860);

    context_canvas.lineTo(position.x + 602, position.y - 100);
    context_canvas.lineTo(position.x - 600, position.y + 460);
    context_canvas.lineTo(position.x + 110, position.y - 300);
    context_canvas.lineTo(position.x + 760, position.y - 200);

    context_canvas.closePath();
    context_canvas.stroke();

    context_canvas.rotate(0.01);

    window.requestAnimationFrame(alic5_frame);
  };

  alic5_frame();
};

if (document.readyState === "complete") {
  alic5();
} else {
  document.addEventListener("DOMContentLoaded", alic5);
}
