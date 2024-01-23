<template>
  <div class="container1">
    <h1>Inside Open Art</h1>
    <div class="div container">
      <div>
        <p><i class="fa-solid fa-hashtag"></i></p>
        <p>4pt gird system</p>
        <p>
          Base on 4pt grid system. Our UI kit help you create perfect white
          space
        </p>
      </div>
      <div>
        <p><i class="fa-solid fa-pen-nib"></i></p>
        <p>Color style</p>
        <p>
          All color in OpenArt are styled. You can change all design color with
          one click
        </p>
      </div>
      <div>
        <p><i class="fa-solid fa-a"></i></p>
        <p>Free font</p>
        <p>
          OpenArt use Epilogue font family Available with open licence in
          gooogle font
        </p>
      </div>
      <div>
        <p><i class="fa-solid fa-toggle-on"></i></p>
        <p>Darkmode avaiable</p>
        <p>
          Our UI Kit support darkmode Chage your design to dark mode with one
          click
        </p>
      </div>
      <div>
        <p><i class="fa-regular fa-pen-to-square"></i></p>
        <p>Easy to customize</p>
        <p></p>
      </div>
      <div>
        <p><i class="fa-solid fa-divide"></i></p>
        <p>Variant components</p>
        <p>All component art variant, easy to design, easy to control</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexView",
};
</script>

<style>
.container1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("../assets/img/anh.png");
  width: 100%;
  height: 100vh;
}
h1 {
  margin-top: 100px;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
}
.container > div {
  width: 400px;
  background-color: white;
  height: auto;
  margin: 10px;
  color: black;
  border-radius: 10px;
  padding: 20px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  margin-top: 30px;
}
.container > div p {
  font-style: normal;
  font-weight: 600;
  margin: 10px;
}

.container > div p:last-child {
  opacity: 0.5;
}
</style>