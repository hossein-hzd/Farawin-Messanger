<?php /** @var TYPE_NAME $contents */
if (sizeof($contents)>0) { ?>
    <section class="mb-3 overflow-hidden">
        <div class="container">
            <div class="hearings__unix items-center grid lg:grid-cols-24 grid-cols-1">
                <div class="lg:col-span-11 flex lg:justify-start justify-center lg:text-right text-center lg:ml-12 ">
                    <svg class="text-dark-550 lg:ml-4 lg:flex hidden mt-2" width="37" height="34" viewBox="0 0 37 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="24" r="10" fill="currentColor"></circle>
                        <circle cx="30" cy="13" r="7" fill="currentColor" fill-opacity="0.4"></circle>
                        <circle cx="15" cy="4" r="4" fill="currentColor" fill-opacity="0.7"></circle>
                    </svg>
                    <div>
                        <div class="relative">
                            <h3 class="dark:!text-white text-biscay-700 xl:text-4xl text-3xl font-extrabold mb-2"><?= $value[$file]['title'] ?></h3>
                        </div>
                        <p class="dark:text-gray-940 text-gray-300 lg:text-lg text-base font-normal mb-5  max-w-sm overflow-hidden"><?= $value[$file]['description'] ?></p>

                        <div class="flex items-center justify-between relative">
                            <div class="arrow__circls flex items-center justify-center relative pr-1">
                                <div class="swiper-button-prev h-4 mt-0 left-0 ml-2 relative">
                                    <svg class="dark:text-white text-dark-550" width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4" d="M7.12872 6.34863L2.5608 5.94466C1.53567 5.94466 0.704529 6.7839 0.704529 7.81901C0.704529 8.85412 1.53567 9.69336 2.5608 9.69336L7.12872 9.28938C7.93292 9.28938 8.58491 8.63105 8.58491 7.81901C8.58491 7.00561 7.93292 6.34863 7.12872 6.34863" fill="currentColor"></path>
                                        <path d="M22.4681 6.42292C22.3967 6.35083 22.13 6.04614 21.8795 5.79314C20.4179 4.20852 16.6016 1.61734 14.6053 0.824345C14.3022 0.697847 13.5357 0.428528 13.1248 0.409485C12.7328 0.409485 12.3583 0.500618 12.0014 0.680164C11.5555 0.931801 11.1999 1.32898 11.0032 1.79689C10.8779 2.12061 10.6812 3.09315 10.6812 3.11084C10.4859 4.17315 10.3795 5.9006 10.3795 7.81032C10.3795 9.62754 10.4859 11.2843 10.6462 12.3643C10.6637 12.3833 10.8604 13.5898 11.0746 14.0033C11.4666 14.7596 12.2331 15.2275 13.0534 15.2275H13.1248C13.6596 15.2098 14.7831 14.7405 14.7831 14.7242C16.673 13.9312 20.399 11.4652 21.897 9.82613C21.897 9.82613 22.3199 9.40447 22.5031 9.14195C22.7887 8.76381 22.9315 8.29591 22.9315 7.828C22.9315 7.30568 22.7712 6.82009 22.4681 6.42292" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <div class="swiper-button-next h-4 right-0 mt-0 relative">
                                    <svg class="dark:text-white text-dark-550" width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4" d="M16.5073 6.34863L21.0752 5.94466C22.1003 5.94466 22.9315 6.7839 22.9315 7.81901C22.9315 8.85412 22.1003 9.69336 21.0752 9.69336L16.5073 9.28938C15.7031 9.28938 15.0511 8.63105 15.0511 7.81901C15.0511 7.00561 15.7031 6.34863 16.5073 6.34863" fill="currentColor"></path>
                                        <path d="M1.16786 6.42292C1.23926 6.35083 1.50598 6.04614 1.75653 5.79314C3.21811 4.20852 7.03437 1.61734 9.03073 0.824345C9.33382 0.697847 10.1003 0.428528 10.5112 0.409485C10.9032 0.409485 11.2776 0.500618 11.6346 0.680164C12.0805 0.931801 12.4361 1.32898 12.6328 1.79689C12.7581 2.12061 12.9548 3.09315 12.9548 3.11084C13.1501 4.17315 13.2565 5.9006 13.2565 7.81032C13.2565 9.62754 13.1501 11.2843 12.9898 12.3643C12.9723 12.3833 12.7756 13.5898 12.5614 14.0033C12.1694 14.7596 11.4029 15.2275 10.5826 15.2275H10.5112C9.97638 15.2098 8.85292 14.7405 8.85292 14.7242C6.96297 13.9312 3.23697 11.4652 1.73902 9.82613C1.73902 9.82613 1.31604 9.40447 1.13284 9.14195C0.84726 8.76381 0.70447 8.29591 0.70447 7.828C0.70447 7.30568 0.864772 6.82009 1.16786 6.42292" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </div>
                            <svg class="dark:text-gray-930 text-gray-920 ml-16 transform sm:mt-0 mt-6 sm:rotate-0 rotate-215" width="81" height="25" viewBox="0 0 81 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.1967 14.3986C25.5868 13.9847 22.0069 13.342 18.4784 12.4745C16.792 12.0466 12.2026 11.5965 11.3659 10.0623C14.4789 9.24078 17.802 9.66713 20.9105 8.43793C22.2549 7.90469 24.0976 7.15477 24.3908 5.52325C24.8311 3.10397 22.5994 3.77298 21.0294 3.94254C17.6692 4.3178 14.1955 4.26364 10.8129 4.37265C8.21636 4.45288 2.1991 3.36004 0.75924 6.3001C-0.680619 9.24016 3.70799 12.3632 5.54259 14.087C8.50795 16.9111 11.4369 19.7705 14.422 22.5651C15.2426 23.339 16.7726 25.1362 18.1266 24.8437C19.9916 24.4238 19.3821 22.6707 18.7377 21.448C18.3268 20.6539 12.3485 13.2275 12.3318 13.2334C12.9125 13.059 16.0756 14.503 16.5971 14.6724C18.7851 15.3399 21.0082 15.8863 23.2564 16.3091C29.1409 17.505 35.2798 18.8366 41.3307 18.5846C44.1562 18.4613 46.2644 17.4415 48.7901 16.4024C51.1811 15.4181 53.2468 16.8916 55.7475 17.5098C60.9531 18.7403 66.3814 18.6725 71.5546 17.3125C75.0607 16.4128 83.0583 13.2526 79.9898 8.14036C79.1913 6.81046 77.6537 5.8984 77.713 7.71002C77.7492 8.94395 78.6421 9.14417 78.0975 10.5525C77.6207 11.4769 76.8129 12.1875 75.8353 12.5428C71.3525 14.7964 64.9792 15.3272 60.1138 14.7865C58.2671 14.554 54.5964 13.8444 53.1131 12.6278C51.7956 11.5519 52.7224 10.088 52.4922 8.17502C51.8776 3.22806 46.3507 -1.37941 41.1423 0.48748C33.6157 3.20407 42.2988 11.4021 45.8298 13.4113C42.1694 16.6785 33.3853 14.926 29.1967 14.3986ZM44.3831 4.04077C48.1118 4.66985 49.1864 7.04037 48.6529 10.4538C47.4697 9.70609 38.6072 3.3136 44.3831 4.04077C45.0235 4.15333 43.8802 3.97745 44.3831 4.04077Z" fill="currentColor"></path>
                            </svg>
                        </div>


                    </div>
                </div>
                <div class="lg:col-span-13 xl:pl-5">
                    <div class="swiper hearings__slider py-20" style="overflow: visible">
                        <div class="swiper-wrapper">
                            <?php foreach($contents as $comment){ ?>
                                <div class="swiper-slide">
                                    <div class="w-full shadow-sm rounded-xl dark:bg-dark-930 dark:shadow-teacherCardSHadow bg-white lg:px-9 flex-1 px-5 h-full pt-8 pb-6 min-h-290 flex flex-col justify-center">
                                        <div>
                                            <p class="text-center lg:text-xl text-base font-normal flex-grow overflow-hidden lg:leading-10 leading-7 dark:text-gray-940 text-gray-800 mb-7">
                                                <?= Model::summary($comment['cm_text'], 500) ?>
                                            </p>
                                        </div>
                                        <div class="flex items-center justify-center">
                                            <div class="lg:w-16 w-14 lg:h-16 h-14 rounded-full overflow-hidden ml-3 dark:border-white border-4">
                                                <img class="w-full h-full object-cover text-center" src="<?= $comment['c_image'] ?>" alt="<?= $comment['c_display_name'] ?>"/>
                                            </div>
                                            <div class="flex flex-col">
                                                <span class="dark:text-white text-biscay-700 lg:text-xl text-base font-bold mb-2"><?= $comment['c_display_name'] ?></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <?php } ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
<?php } ?>