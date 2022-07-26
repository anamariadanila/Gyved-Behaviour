const makeUser = function () {
  const action = [];
  return {
    jump: function () {
      action.push("jumping");
      return this;
    },
    speak: function () {
      action.push("speaking");
      return this;
    },
    run: function () {
      action.push("running");
      return this;
    },
    swim: function () {
      action.push("swimming");
      return this;
    },
    sleep: function () {
      action.push("sleeping");
      return this;
    },
    exec: function () {
      if (!action.length) {
        action.push("");
        console.log(action.join(""));
        return action.join("");
      } else {
        console.log(action.join(", "));
        return action.join(", ");
      }
    },
  };
};

const user = makeUser();

const result = user
  .sleep()
  .swim()
  .speak()
  .jump()
  .swim()
  .sleep()
  .run()
  .run()
  .exec();

document.getElementById("result").innerHTML = result;
