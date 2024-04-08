<template>
  <div class="mt-10 flex flex-col">
    <h1
      class="text-2xl lg:text-[70px] flex justify-center text-center lg:mt-20"
    >
      Virtuals Build tools
      <span class="text-orange-500 lg:ml-4 ml-2">for developers</span>
    </h1>
    <p
      class="mt-10 font-sans text-gray-400 text-sm leading-5 lg:text-lg lg:font-normal px-5 flex justify-center text-center font-thin"
    >
      Empower your creativity and bring your VR app ideasto life with our
      intutive development tools. <br />
      Get started today and turn your imagination into immerse reality!
    </p>
    <div class="flex gap-5 justify-center mt-10">
      <button class="w-[120px] h-[50px] bg-[#c14d24] rounded-lg">
        Start for free
      </button>
      <button class="w-[140px] h-[50px] border border-white rounded-lg">
        Documentation
      </button>
    </div>

    <div class="mt-10 px-5 lg:mt-20 flex gap-5 justify-center lg:px-20">
      <video
        src="@/assets/video1.mp4"
        autoplay
        loop
        muted
        class="w-1/2 border border-[#c14d24] rounded-lg"
      ></video>
      <video
        src="@/assets/video2.mp4"
        autoplay
        loop
        muted
        class="w-1/2 border border-[#c14d24] rounded-lg"
      ></video>
    </div>

    <!-- Feature -->

    <div class="mt-20">
      <div class="flex justify-center text-center">
        <p
          class="text-[#f07230] font-semibold bg-[#171717] text-[10px] p-2 rounded-3xl"
        >
          FEATURE
        </p>
      </div>
      <h1
        class="text-3xl text-center lg:mt-20 mt-10 lg:text-7xl tracking-wider flex justify-center"
      >
        Easily build your code
      </h1>

      <!-- Drag -->
      <div class="grid md:grid-cols-3 md:px-20 lg:mt-20 mt-10 gap-10 lg:gap-20">
        <Drag
          :svg="textIcon"
          heading="Drag-and-Drop Interface"
          paragrapgh=" Easily design and arrangeyour VR enviroments with a user-friendly
            Drag-and-Drop Interface."
        />
        <Drag
          :svg="fingerPrint"
          heading="Multi-Platform Compatability"
          paragrapgh="Build VR applications that run seamensly across multiple platform including mobile,desktop,and VR headsets."
        />
        <Drag
          :svg="shield"
          heading="Built-in Templates"
          paragrapgh="Jumpstart your VR projects with a variety of of built-in templates for different types of applications and enviroments"
        />
        <Drag
          :svg="battery"
          heading="Real-Time preview"
          paragrapgh="Preview your VR apllication in real-time as you make changes,allowing for quick iterations and adjustments."
        />
        <Drag
          :svg="tools"
          heading="Real-Time preview"
          paragrapgh="Preview your VR apllication in real-time as you make changes,allowing for quick iterations and adjustments."
        />
        <Drag
          :svg="globe"
          heading="Analytics Dashboard"
          paragrapgh="Gain Valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard "
        />
      </div>
    </div>

    <!-- Accelerate -->
    <div
      class="border-t-[1px] border-gray-700 mt-10 lg:mt-28 flex flex-col justify-center"
    >
      <h1
        class="text-3xl text-center flex justify-center lg:text-7xl my-3 lg:mt-20 lg:flex lg:justify-center"
      >
        Accelerate your coding workflow
      </h1>
      <div class="flex flex-col lg:flex-row lg:px-20">
        <img src="@/assets/code.jpg" alt="" class="lg:w-1/2" />
        <div class="flex flex-col lg:gap-1 gap-4">
          <Accelerate
            :icon="svgContent"
            header="Code merge made easy"
            body="  Track the performance of your VR apps and gain insights into  into user behaviour."
          />
          <Accelerate
            :icon="svgContent"
            header="Code merge made easy"
            body="  Track the performance of your VR apps and gain insights into  into user behaviour."
          />
          <Accelerate
            :icon="svgContent"
            header="AI Assistance to reduce time"
            body="  Track the performance of your VR apps and gain insights into  into user behaviour."
          />
          <Accelerate
            :icon="svgContent"
            header="Share work in minutes"
            body="  Track the performance of your VR apps and gain insights into  into user behaviour."
          />
        </div>
      </div>
    </div>
    <!-- pricing -->

    <div class="mt-20">
      <h1 class="flex justify-center text-5xl">Pricing</h1>
      <div class="flex-col flex lg:flex-row justify-center gap-2 lg:gap-4">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>

    <!-- what -->

    <div class="mt-20">
      <h1 class="flex text-center justify-center text-4xl lg:text-7xl">
        What are people saying
      </h1>

      <!-- Card 2 -->
      <div
        class="grid md:grid-cols-3 mt-10 lg:mt-20 justify-center lg:px-20 gap-5"
      >
        <div class="border rounded-[3px] border-gray-800 px-4 py-4">
          <h1 class="text-lg font-sans text-gray-400">
            I am extremely satisfied with the services provided. The team was
            responsive, professional, and delivered results beyond my
            expectations.
          </h1>
          <div class="flex gap-4 mt-8">
            <img
              src="@/assets/profile-pictures/user1.jpg"
              alt=""
              class="w-12 rounded-full"
            />
            <div class="flex flex-col">
              <h1>John Doe</h1>
              <em class="text-sm text-gray-600">Stellar Solutions</em>
            </div>
          </div>
        </div>
        <div class="border rounded-[3px] border-gray-800 px-4 py-4">
          <h1 class="text-lg font-sans text-gray-400">
            I couldn't be happier with the outcome of our project. The team's
            creativity and problem-solving skills were instrumental in bringing
            our vision to life
          </h1>
          <div class="flex gap-4 mt-8">
            <img
              src="@/assets/profile-pictures/user2.jpg"
              alt=""
              class="w-12 rounded-full"
            />
            <div class="flex flex-col">
              <h1>Jane Smith</h1>
              <em class="text-sm text-gray-600">Blue Horizon Technologies</em>
            </div>
          </div>
        </div>

        <div class="border rounded-[3px] border-gray-800 px-4 py-4">
          <h1 class="text-lg font-sans text-gray-400">
            Working with this company was a pleasure. Their attention to detail
            and commitment to excellence are commendable. I would highly
            recommend them to anyone looking for top-notch service.
          </h1>
          <div class="flex gap-4 mt-8">
            <img
              src="@/assets/profile-pictures/user3.jpg"
              alt=""
              class="w-12 rounded-full"
            />
            <div class="flex flex-col">
              <h1>David Johnson</h1>
              <em class="text-sm text-gray-600">Quantum Innovations</em>
            </div>
          </div>
        </div>
        <div class="border rounded-[3px] border-gray-800 px-4 py-4">
          <h1 class="text-lg font-sans text-gray-400">
            Working with the team at XYZ Company was a game-changer for our
            project. Their attention to detail and innovative solutions helped
            us achieve our goals faster than we thought possible. We are
            grateful for their expertise and professionalism!
          </h1>
          <div class="flex gap-4 mt-8">
            <img
              src="@/assets/profile-pictures/user4.jpg"
              alt=""
              class="w-12 rounded-full"
            />
            <div class="flex flex-col">
              <h1>Ronee Brown</h1>
              <em class="text-sm text-gray-600">Fusion Dynamics</em>
            </div>
          </div>
        </div>
        <div class="border rounded-[3px] border-gray-800 px-4 py-4">
          <h1 class="text-lg font-sans text-gray-400">
            Working with the team at XYZ Company was a game-changer for our
            project. Their attention to detail and innovative solutions helped
            us achieve our goals faster than we thought possible. We are
            grateful for their expertise and professionalism!
          </h1>
          <div class="flex gap-4 mt-8">
            <img
              src="@/assets/profile-pictures/user5.jpg"
              alt=""
              class="w-12 rounded-full"
            />
            <div class="flex flex-col">
              <h1>Ronee Brown</h1>
              <em class="text-sm text-gray-600">Fusion Dynamics</em>
            </div>
          </div>
        </div>
        <div class="border rounded-[3px] border-gray-800 px-4 py-4">
          <h1 class="text-lg font-sans text-gray-400">
            The team went above and beyond to ensure our project was a success.
            Their expertise and dedication are unmatched. I look forward to
            working with them again in the future.
          </h1>
          <div class="flex gap-4 mt-8">
            <img
              src="@/assets/profile-pictures/user6.jpg"
              alt=""
              class="w-12 rounded-full"
            />
            <div class="flex flex-col">
              <h1>Emily Davis</h1>
              <em class="text-sm text-gray-600">Synergy Systems</em>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- footer -->
    <div
      class="border-t-[1px] border-gray-700 mt-10 gap-3 lg:mt-28 lg:flex lg:gap-[250px] px-2 lg:px-20 grid grid-cols-2 mb-2"
    >
      <div class="flex flex-col mt-10">
        <h1 class="font-semibold text-2xl">Resources</h1>
        <ul class="mt-5 flex flex-col gap-2 text-gray-400 text-lg">
          <li class="hover:text-white">Getting Started</li>
          <li class="hover:text-white">Documentation</li>
          <li class="hover:text-white">Tutorials</li>
          <li class="hover:text-white">API Reference</li>
          <li>Community Forums</li>
        </ul>
      </div>
      <div class="flex flex-col mt-10">
        <h1 class="font-semibold text-2xl">Platform</h1>
        <ul class="mt-5 flex flex-col gap-1 text-gray-400 text-lg">
          <li class="hover:text-white">Features</li>
          <li class="hover:text-white">Supported Devices</li>
          <li class="hover:text-white">System Requirements</li>
          <li class="hover:text-white">Downloads</li>
          <li class="hover:text-white">Release Notes</li>
        </ul>
      </div>
      <div class="flex flex-col mt-10">
        <h1 class="font-semibold text-2xl">Community</h1>
        <ul class="mt-5 flex flex-col gap-2 text-gray-400 text-lg">
          <li class="hover:text-white">Events</li>
          <li class="hover:text-white">Meetups</li>
          <li class="hover:text-white">Conferences</li>
          <li class="hover:text-white">Hackathons</li>
          <li class="hover:text-white">Jobs</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Drag from "../components/Drag.vue";
import Accelerate from "../components/Accelerate.vue";
import Cards from "../components/Cards.vue";
export default {
  name: "Test",
  components: {
    Drag,
    Accelerate,
    Cards,
  },
  created() {},
  data() {
    return {
      textIcon: `  <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-8 text-[#c24225]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          />
        </svg>`,

      fingerPrint: ` <svg
       xmlns="http://www.w3.org/2000/svg" 
       fill="none" 
       viewBox="0 0 24 24" stroke-width="1.5"
       stroke="currentColor" class="w-6 h-8">
       <path stroke-linecap="round" 
         stroke-linejoin="round"
         d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
        />
       </svg>
`,

      shield: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
</svg>
`,
      battery: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5h6.75V15H4.5v-4.5ZM3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z" />
</svg>
`,
      tools: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
</svg>
`,
      globe: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>
`,

      svgContent: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
      </svg>`,
    };
  },
  props: {},
  methods: {},
};
</script>

<style></style>
