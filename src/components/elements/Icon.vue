<template>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    v-if="props.type == MANAGE_BRAND">
    <path d="M6.357 9C3.72 9.68 2 10.845 2 12.175C2 14.282 6.405 16 11.85 16C12.59 16 13.11 15.961 13.8 15.903"
      :stroke="props.active ? COLOR.primary : COLOR.black" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round" />
    <path
      d="M9.83711 15.9002C9.42411 15.3042 9.03111 14.7672 8.65711 14.1002C5.90611 9.20022 5.16911 4.33022 7.02711 3.22722C8.17711 2.53022 10.0741 3.48022 12.0011 5.48122"
      :stroke="props.active ? COLOR.primary : COLOR.black" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round" />
    <path
      d="M6.42922 15.387C5.72722 18.075 5.86922 20.103 6.98922 20.782C8.77222 21.862 12.3762 18.824 15.0322 13.978C15.3922 13.308 15.7152 12.649 16.0002 12"
      :stroke="props.active ? COLOR.primary : COLOR.black" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round" />
    <path
      d="M12 18.5206C13.928 20.5206 15.817 21.4706 16.978 20.7736C18.828 19.6716 18.099 14.8016 15.345 9.90059C14.961 9.22359 14.568 8.69659 14.165 8.10059"
      :stroke="props.active ? COLOR.primary : COLOR.black" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round" />
    <path
      d="M17.6602 15C20.2722 14.313 22.0002 13.15 22.0002 11.824C22.0002 9.714 17.5922 8 12.1552 8C11.4082 8 10.8892 8.029 10.2002 8.087"
      :stroke="props.active ? COLOR.primary : COLOR.black" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round" />
    <path
      d="M12.26 12.0152H12.25C12.24 12.1452 12.13 12.2552 11.99 12.2552C11.923 12.2519 11.8599 12.2231 11.8134 12.1748C11.7669 12.1265 11.7407 12.0623 11.74 11.9952C11.74 11.8552 11.85 11.7452 11.98 11.7452H11.97C12.1 11.7352 12.22 11.8552 12.22 11.9852M8 12.0002C8.285 11.3402 8.607 10.6922 8.968 10.0222C11.615 5.17822 15.221 2.13222 17.014 3.22122C18.124 3.90022 18.276 5.92722 17.574 8.61422L8 12.0002Z"
      :stroke="props.active ? COLOR.primary : COLOR.black" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round" />
  </svg>

  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    v-if="props.type == MANAGE_PAGE">
    <path
      d="M16 8H8V6H16V8ZM16 10H8V12H16V10ZM20 4V16L14 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2H18C18.5304 2 19.0391 2.21071 19.4142 2.58579C19.7893 2.96086 20 3.46957 20 4ZM18 14V4H6V20H12V16C12 15.4696 12.2107 14.9609 12.5858 14.5858C12.9609 14.2107 13.4696 14 14 14H18Z"
      :fill="props.active ? COLOR.primary : COLOR.black" />
  </svg>

  <svg width="24" height="24" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" v-if="props.type == MANAGE_PRODUCT">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="icon" :fill="props.active ? COLOR.primary : COLOR.black" transform="translate(42.666667, 34.346667)">
        <path
          d="M426.247658,366.986259 C426.477599,368.072636 426.613335,369.17172 426.653805,370.281095 L426.666667,370.986667 L426.666667,392.32 C426.666667,415.884149 383.686003,434.986667 330.666667,434.986667 C278.177524,434.986667 235.527284,416.264289 234.679528,393.025571 L234.666667,392.32 L234.666667,370.986667 L234.679528,370.281095 C234.719905,369.174279 234.855108,368.077708 235.081684,366.992917 C240.961696,371.41162 248.119437,375.487081 256.413327,378.976167 C275.772109,387.120048 301.875889,392.32 330.666667,392.32 C360.599038,392.32 387.623237,386.691188 407.213205,377.984536 C414.535528,374.73017 420.909655,371.002541 426.247658,366.986259 Z M192,7.10542736e-15 L384,106.666667 L384.001134,185.388691 C368.274441,181.351277 350.081492,178.986667 330.666667,178.986667 C301.427978,178.986667 274.9627,184.361969 255.43909,193.039129 C228.705759,204.92061 215.096345,223.091357 213.375754,241.480019 L213.327253,242.037312 L213.449,414.75 L192,426.666667 L-2.13162821e-14,320 L-2.13162821e-14,106.666667 L192,7.10542736e-15 Z M426.247658,302.986259 C426.477599,304.072636 426.613335,305.17172 426.653805,306.281095 L426.666667,306.986667 L426.666667,328.32 C426.666667,351.884149 383.686003,370.986667 330.666667,370.986667 C278.177524,370.986667 235.527284,352.264289 234.679528,329.025571 L234.666667,328.32 L234.666667,306.986667 L234.679528,306.281095 C234.719905,305.174279 234.855108,304.077708 235.081684,302.992917 C240.961696,307.41162 248.119437,311.487081 256.413327,314.976167 C275.772109,323.120048 301.875889,328.32 330.666667,328.32 C360.599038,328.32 387.623237,322.691188 407.213205,313.984536 C414.535528,310.73017 420.909655,307.002541 426.247658,302.986259 Z M127.999,199.108 L128,343.706 L170.666667,367.410315 L170.666667,222.811016 L127.999,199.108 Z M42.6666667,151.701991 L42.6666667,296.296296 L85.333,320.001 L85.333,175.405 L42.6666667,151.701991 Z M330.666667,200.32 C383.155809,200.32 425.80605,219.042377 426.653805,242.281095 L426.666667,242.986667 L426.666667,264.32 C426.666667,287.884149 383.686003,306.986667 330.666667,306.986667 C278.177524,306.986667 235.527284,288.264289 234.679528,265.025571 L234.666667,264.32 L234.666667,242.986667 L234.808715,240.645666 C237.543198,218.170241 279.414642,200.32 330.666667,200.32 Z M275.991,94.069 L150.412,164.155 L192,187.259259 L317.866667,117.333333 L275.991,94.069 Z M192,47.4074074 L66.1333333,117.333333 L107.795,140.479 L233.373,70.393 L192,47.4074074 Z"
          id="Combined-Shape">
        </path>
      </g>
    </g>
  </svg>

  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    v-if="props.type == MANAGE_ORDER">
    <rect x="11.0977" y="7.58252" width="7.89498" height="7.89498" rx="1" transform="rotate(-45 11.0977 7.58252)"
      :fill="props.active ? COLOR.primary : COLOR.black" />
    <rect x="12.7417" y="12.793" width="9.20693" height="9.20693" rx="1"
      :fill="props.active ? COLOR.primary : COLOR.black" />
    <rect x="2" y="12.793" width="9.20693" height="9.20693" rx="1" :fill="props.active ? COLOR.primary : COLOR.black" />
    <rect x="2" y="2.05127" width="9.20693" height="9.20693" rx="1"
      :fill="props.active ? COLOR.primary : COLOR.black" />
  </svg>

  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === MANAGE_NEWS">
    <path
      d="M14 10H19.5L14 4.5V10ZM5 3H15L21 9V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 3.89 3.89 3 5 3ZM5 12V14H19V12H5ZM5 16V18H14V16H5Z"
      :fill="props.active ? COLOR.primary : COLOR.black" />
  </svg>

  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === MANAGE_STORE">
    <path
      d="M3.25 3V5.742L1 8.742V9C1 10.2337 2.01625 11.25 3.25 11.25V21H15.25V14.25H16.75V21H21.25V11.25C22.4837 11.25 23.5 10.2337 23.5 9V8.742L21.25 5.742V3H3.25ZM4.75 4.5H19.75V5.25H4.75V4.5ZM4.375 6.75H20.125L21.9295 9.16425C21.847 9.489 21.6017 9.75 21.25 9.75C20.8337 9.75 20.5 9.41625 20.5 9H19C19 9.41625 18.6663 9.75 18.25 9.75C17.8337 9.75 17.5 9.41625 17.5 9H16C16 9.41625 15.6663 9.75 15.25 9.75C14.8337 9.75 14.5 9.41625 14.5 9H13C13 9.41625 12.6663 9.75 12.25 9.75C11.8337 9.75 11.5 9.41625 11.5 9H10C10 9.41625 9.66625 9.75 9.25 9.75C8.83375 9.75 8.5 9.41625 8.5 9H7C7 9.41625 6.66625 9.75 6.25 9.75C5.83375 9.75 5.5 9.41625 5.5 9H4C4 9.41625 3.66625 9.75 3.25 9.75C2.89825 9.75 2.65225 9.489 2.5705 9.16425L4.375 6.75ZM4.75 10.6642C5.14825 11.0243 5.6755 11.25 6.25 11.25C6.8245 11.25 7.35175 11.025 7.75 10.6642C8.14825 11.0243 8.6755 11.25 9.25 11.25C9.8245 11.25 10.3518 11.025 10.75 10.6642C11.1482 11.0243 11.6755 11.25 12.25 11.25C12.8245 11.25 13.3518 11.025 13.75 10.6642C14.1482 11.0243 14.6755 11.25 15.25 11.25C15.8245 11.25 16.3518 11.025 16.75 10.6642C17.1483 11.0243 17.6755 11.25 18.25 11.25C18.8245 11.25 19.3517 11.025 19.75 10.6642V19.5H18.25V12.75H13.75V19.5H4.75V10.6642ZM6.25 12.75V18H12.25V12.75H6.25ZM7.75 14.25H10.75V16.5H7.75V14.25Z"
      :fill="props.active ? COLOR.primary : COLOR.black" />
  </svg>

  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === MANAGE_PROMOTION">
    <path
      d="M14.43 10L12.96 5.16001C12.67 4.21001 11.33 4.21001 11.05 5.16001L9.56996 10H5.11996C4.14996 10 3.74996 11.25 4.53996 11.81L8.17996 14.41L6.74996 19.02C6.45996 19.95 7.53996 20.7 8.30996 20.11L12 17.31L15.69 20.12C16.46 20.71 17.54 19.96 17.25 19.03L15.82 14.42L19.46 11.82C20.25 11.25 19.85 10.01 18.88 10.01H14.43V10Z"
      :fill="props.active ? COLOR.primary : COLOR.black" />
  </svg>


  <!-- circle -->
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
    v-if="props.type == CIRCLE">
    <circle cx="12" cy="12" r="3" :fill="props.active ? COLOR.primary : COLOR.black" />
    <circle v-if="props.color" cx="12" cy="12" r="5" :fill="props.color" />
  </svg>



  <!-- arrow right -->
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === ARROW_RIGHT">
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8.5 12H14.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12.5 15L15.5 12L12.5 9" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
      stroke-linejoin="round" />
  </svg>

  <!-- arrow down -->
  <svg xmlns="http://www.w3.org/2000/svg" class="lg:w-6 lg:h-6 md:w-[20px] md:h-[20px] w-[18px] h-[18px]"
    viewBox="0 0 24 24" fill="none" v-if="props.type === ARROW_DOWN">
    <path d="M18 10L13.0606 14.5932C12.4773 15.1356 11.5227 15.1356 10.9394 14.5932L6 10"
      :stroke="props.active ? COLOR.primary : COLOR.black" stroke-width="1.5" stroke-miterlimit="10"
      stroke-linecap="round" stroke-linejoin="round" />
  </svg>
  <!-- hamburger icon -->
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === HUMBURER">
    <rect width="30" height="30" rx="2" fill="white" />
    <path d="M6 10H24" :stroke="COLOR.primary" stroke-width="1.5" stroke-linecap="round" />
    <path d="M6 15H24" :stroke="COLOR.primary" stroke-width="1.5" stroke-linecap="round" />
    <path d="M6 20H24" :stroke="COLOR.primary" stroke-width="1.5" stroke-linecap="round" />
  </svg>
  <!--next breadcrumb-->
  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none"
    v-if="props.type === NEXT_BREADCRUMB">
    <path
      d="M5.66369 8.49996C5.74908 8.50025 5.83344 8.48141 5.91058 8.44483C5.98773 8.40824 6.05569 8.35484 6.10949 8.28855L8.86998 4.8603C8.95405 4.75807 9 4.62983 9 4.49748C9 4.36514 8.95405 4.2369 8.86998 4.13466L6.01233 0.70641C5.91532 0.589726 5.77591 0.516348 5.62478 0.502418C5.47366 0.488488 5.32318 0.535147 5.20647 0.632132C5.08975 0.729116 5.01635 0.868481 5.00242 1.01957C4.98848 1.17065 5.03516 1.32109 5.13217 1.43777L7.68691 4.50034L5.2179 7.56291C5.14801 7.64678 5.10361 7.7489 5.08997 7.85721C5.07632 7.96551 5.09399 8.07546 5.14089 8.17403C5.18778 8.27261 5.26195 8.3557 5.3546 8.41346C5.44725 8.47122 5.55451 8.50124 5.66369 8.49996Z"
      fill="#9D9D9D" />
    <path
      d="M0.663692 8.49996C0.749076 8.50025 0.83344 8.48141 0.910584 8.44483C0.987729 8.40824 1.05569 8.35484 1.10949 8.28855L3.86998 4.8603C3.95405 4.75807 4 4.62983 4 4.49748C4 4.36514 3.95405 4.2369 3.86998 4.13466L1.01233 0.70641C0.915315 0.589726 0.775912 0.516348 0.624784 0.502418C0.473656 0.488488 0.323183 0.535147 0.206467 0.632132C0.0897505 0.729116 0.0163522 0.868481 0.00241828 1.01957C-0.0115156 1.17065 0.0351567 1.32109 0.132168 1.43777L2.68691 4.50034L0.217898 7.56291C0.148009 7.64678 0.103614 7.7489 0.0899663 7.85721C0.0763183 7.96551 0.0939882 8.07546 0.140886 8.17403C0.187783 8.27261 0.261945 8.3557 0.354596 8.41346C0.447248 8.47122 0.55451 8.50124 0.663692 8.49996Z"
      fill="#9D9D9D" />
  </svg>
  <!--logout-->
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === LOGOUT">
    <path
      d="M15.1001 7.55999C14.7901 3.95999 12.9401 2.48999 8.8901 2.48999H8.7601C4.2901 2.48999 2.5001 4.27999 2.5001 8.74999V15.27C2.5001 19.74 4.2901 21.53 8.7601 21.53H8.8901C12.9101 21.53 14.7601 20.08 15.0901 16.54"
      stroke="#A1A1A1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8.99988 12H20.3799" stroke="#A1A1A1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18.15 8.6499L21.5 11.9999L18.15 15.3499" stroke="#A1A1A1" stroke-width="1.5" stroke-linecap="round"
      stroke-linejoin="round" />
  </svg>

  <!-- pen -->
  <svg v-if="props.type === PENCIL" width="14" height="17" viewBox="0 0 14 17" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M0.814664 14.9H12.22C12.436 14.9 12.6432 14.9843 12.796 15.1343C12.9488 15.2843 13.0346 15.4878 13.0346 15.7C13.0346 15.9122 12.9488 16.1157 12.796 16.2657C12.6432 16.4157 12.436 16.5 12.22 16.5H0.814664C0.598601 16.5 0.391389 16.4157 0.23861 16.2657C0.0858306 16.1157 0 15.9122 0 15.7C0 15.4878 0.0858306 15.2843 0.23861 15.1343C0.391389 14.9843 0.598601 14.9 0.814664 14.9ZM0 10.9L8.14664 2.9L10.5906 5.3L2.44399 13.3H0V10.9ZM8.9613 2.1L10.5906 0.5L13.0346 2.9L11.4045 4.5008L8.9613 2.1Z"
      fill="#6F6F71" />
  </svg>

  <!-- delete -->

  <svg v-if="props.type === DELETE" width="16" height="17" viewBox="0 0 16 17" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.4097 3.38H11.9097V1.78C11.9097 1.074 11.3491 0.5 10.6597 0.5H4.40967C3.72021 0.5 3.15967 1.074 3.15967 1.78V3.38H0.659668C0.313965 3.38 0.034668 3.666 0.034668 4.02V4.66C0.034668 4.748 0.10498 4.82 0.190918 4.82H1.37061L1.85303 15.28C1.88428 15.962 2.43506 16.5 3.10107 16.5H11.9683C12.6362 16.5 13.1851 15.964 13.2163 15.28L13.6987 4.82H14.8784C14.9644 4.82 15.0347 4.748 15.0347 4.66V4.02C15.0347 3.666 14.7554 3.38 14.4097 3.38ZM10.5034 3.38H4.56592V1.94H10.5034V3.38Z"
      fill="#6F6F71" />
  </svg>



  <!-- plus circle -->
  <svg width="42" height="42" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
    stroke="currentColor" v-if="props.type === PLUS_CIRCLE">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
  <!-- save -->
  <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" v-if="props.type === SAVE">
    <path
      d="M48 96V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V170.5c0-4.2-1.7-8.3-4.7-11.3l33.9-33.9c12 12 18.7 28.3 18.7 45.3V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H309.5c17 0 33.3 6.7 45.3 18.7l74.5 74.5-33.9 33.9L320.8 84.7c-.3-.3-.5-.5-.8-.8V184c0 13.3-10.7 24-24 24H104c-13.3 0-24-10.7-24-24V80H64c-8.8 0-16 7.2-16 16zm80-16v80H272V80H128zm32 240a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
  </svg>
  <!-- plus -->
  <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="{1.5}"
    stroke="currentColor" v-if="props.type === PLUS">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
  <!--Error -->
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === ERROR">
    <path
      d="M8.57465 3.21659L1.51632 14.9999C1.37079 15.2519 1.29379 15.5377 1.29298 15.8287C1.29216 16.1197 1.36756 16.4059 1.51167 16.6587C1.65579 16.9115 1.86359 17.1222 2.11441 17.2698C2.36523 17.4174 2.65032 17.4967 2.94132 17.4999H17.058C17.349 17.4967 17.6341 17.4174 17.8849 17.2698C18.1357 17.1222 18.3435 16.9115 18.4876 16.6587C18.6317 16.4059 18.7071 16.1197 18.7063 15.8287C18.7055 15.5377 18.6285 15.2519 18.483 14.9999L11.4247 3.21659C11.2761 2.97168 11.0669 2.76919 10.8173 2.62866C10.5677 2.48813 10.2861 2.41431 9.99965 2.41431C9.71321 2.41431 9.43159 2.48813 9.18199 2.62866C8.93238 2.76919 8.72321 2.97168 8.57465 3.21659V3.21659Z"
      stroke="#CF0D3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M10 7.5V10.8333" stroke="#CF0D3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M10 14.1667H10.0083" stroke="#CF0D3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
  <!--Success-->
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === SUCCESS">
    <g clip-path="url(#clip0_343_1826)">
      <path
        d="M18.3337 9.2333V9.99997C18.3326 11.797 17.7507 13.5455 16.6748 14.9848C15.5988 16.4241 14.0864 17.477 12.3631 17.9866C10.6399 18.4961 8.79804 18.4349 7.11238 17.8121C5.42673 17.1894 3.98754 16.0384 3.00946 14.5309C2.03138 13.0233 1.56682 11.24 1.68506 9.4469C1.80329 7.65377 2.498 5.94691 3.66556 4.58086C4.83312 3.21482 6.41098 2.26279 8.16382 1.86676C9.91665 1.47073 11.7505 1.65192 13.392 2.3833"
        stroke="#439F6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M18.3333 3.33325L10 11.6749L7.5 9.17492" stroke="#439F6E" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_343_1826">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
  <!--Info-->
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === INFO">
    <g clip-path="url(#clip0_343_1804)">
      <path
        d="M10.0003 18.3334C14.6027 18.3334 18.3337 14.6025 18.3337 10.0001C18.3337 5.39771 14.6027 1.66675 10.0003 1.66675C5.39795 1.66675 1.66699 5.39771 1.66699 10.0001C1.66699 14.6025 5.39795 18.3334 10.0003 18.3334Z"
        stroke="#4097A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M10 13.3333V10" stroke="#4097A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M10 6.66675H10.0083" stroke="#4097A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_343_1804">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
  <!--Close-->
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === CLOSE">
    <path d="M15 5L5 15" stroke="#6D6E70" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5 5L15 15" stroke="#6D6E70" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
  <!--Upload-->
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === UPLOAD">
    <path
      d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
      stroke="#4097A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M17 8L12 3L7 8" stroke="#4097A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 3V15" stroke="#4097A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
  <!-- Profile -->
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === PROFILE">
    <path
      d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
      stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path
      d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
      stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
  <!-- Shopping Cart -->
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    v-if="props.type === SHOPPING_CART">
    <path
      d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
      stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path
      d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
      stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path
      d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
      stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M9 8H21" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
      stroke-linejoin="round" />
  </svg>
  <!-- Loading -->
  <svg :class="props.classCustom" class="-ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 24 24" v-if="props.type === LOADING">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
    </path>
  </svg>
</template>
<script setup>
import { COLOR } from '../../utils/theme';
import {
  MANAGE_PRODUCT,
  CIRCLE,
  WAREHOUSE,
  MANAGE_STORE,
  ARROW_DOWN,
  HUMBURER,
  NEXT_BREADCRUMB,
  LOGOUT,
  PENCIL,
  DELETE,
  MANAGE_BRAND,
  MANAGE_PAGE,
  MANAGE_ORDER,
  MANAGE_PROMOTION,
  MANAGE_NEWS,
  PLUS_CIRCLE,
  SAVE,
  PLUS,
  ERROR,
  SUCCESS,
  INFO,
  CLOSE,
  UPLOAD,
  ARROW_RIGHT,
  PROFILE,
  SHOPPING_CART,
  LOADING,
} from '../../utils/constant';

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '',
  },
  classCustom: {
    type: String,
    default: '',
  },
});
</script>
