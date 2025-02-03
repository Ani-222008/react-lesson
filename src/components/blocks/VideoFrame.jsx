import { IoIosPlayCircle } from "react-icons/io";
import Container from "../Container";
import Button from "../ui/Button";
import { useState } from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";

export default function VideoFrame() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Container>
        <div className="bg-VideoFrameBg bg-cover bg-center flex items-center justify-center h-[600px] rounded-xl">
          <div onClick={handleOpen}>
            <Button invert={true} className="rounded-3xl">
              <IoIosPlayCircle size={40} />
            </Button>
          </div>
        </div>
      </Container>
      <Dialog open={open} size="xl" handler={handleOpen}>
        <DialogBody className="h-[42rem]">
          <iframe className="h-full w-full" width="560" height="315" src="https://www.youtube.com/embed/S84fHUZdOGs?si=ZXwpx6vT1IGRuY2e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </DialogBody>
      </Dialog>
    </>
  );
}
