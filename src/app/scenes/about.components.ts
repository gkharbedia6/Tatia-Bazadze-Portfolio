import { Component } from '@angular/core';

@Component({
  selector: 'about',
  standalone: true,
  template: ` <div
    class="flex w-full px-36 py-32 h-full font-primary gap-3 overflow-hidden flex-row justify-start items-start"
  >
    <div class="flex flex-col w-[75%]">
      <h2 class="text-[26px] font-bold mb-3">About me</h2>
      <p class="text-[14px] mb-3">
        My journey in the realm of abstract art is imbued with the rich tapestry
        of my cultural heritage and personal experiences. With each brushstroke,
        I weave a narrative that speaks to the depths of soul, capturing the
        essence of tradition, passion, and resilience. The vibrant colors of my
        art and textiles infuse my work with a sense of vitality and warmth,
        beneath the surface lies a deeper layer of emotion and introspection, as
        I grapple with themes of identity, belonging, and the universal human
        experience.
      </p>
      <p class="text-[14px]">
        As I stand before the canvas, I am guided by an intuitive sense of
        rhythm and movement, allowing my emotions to flow freely onto the
        surface. There is a raw, unbridled energy to my work, a sense of
        liberation in the act of creation that transcends linguistic barriers
        and resonates with audiences far and wide.
      </p>
      <div class="w-full mt-10">
        <div class="flex flex-col justify-start items-start">
          <div class="flex flex-col gap-3 mb-10">
            <h2 class="text-[26px] font-bold">Education</h2>
            <p class="text-[14px]">
              Tbilisi state academiy of art - Bachelor of Fine Arts - Painting
            </p>
          </div>
          <div class="flex flex-col justify-start items-start">
            <div class="flex flex-col gap-3 mb-5">
              <h2 class="text-[26px] font-bold">Past exhibitions and prizes</h2>
              <p class="text-[14px]">
                "Art evening N2". ART AVENUE gallery - Group exhibition 5,
                Marjanishvili Street Tbilisi. January 15, 2014.
              </p>
              <p class="text-[14px]">
                ''Person'' tbilisi state academy of art - Group exhibition 22
                Griboedovi Street, Tbilisi, Georgia.
              </p>
              <p class="text-[14px]">
                Group exhibition, OIL DROP - Art, Cafe, Bar 18 Giorgi
                Akhvlediani Street Tbilisi, Georgia, May 9 2014.
              </p>
              <p class="text-[14px]">
                Personal exhibition - Untitled 4 Leselidze Street, Tbilisi,
                Georgia, May 7, 2015.
              </p>
              <p class="text-[14px]">
                Tbilisi state academy of art exhibition.(for students)
                Underwheel Club Mtatsminda Park, Tbilisi, Georgia, 2014.
              </p>
              <p class="text-[14px]">
                The Art Palace of Georgia - Shakespeare and Rustaveli meet in
                Georgia. Competition and group exposition - 6 Ia Kargareteli
                Street, Tbilisi, Georgia, September 11, 2016.
              </p>
              <p class="text-[14px]">
                The Visual Arts Award Giraffe - was chosen in 20 best paintings
                and was published in catalogue. Tbilisi, Georgia, May 29 2017.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[25%] h-fit flex justify-end">
      <img src="/assets/images/ProfilePicture.jpg" />
    </div>
  </div>`,
  imports: [],
})
export class AboutComponent {}
