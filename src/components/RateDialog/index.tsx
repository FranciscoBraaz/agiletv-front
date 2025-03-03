import * as Dialog from "@radix-ui/react-dialog";
import { Frown, X } from "lucide-react";
import Rate from "rc-rate";

// Styles
import "./index.scss";
import "rc-rate/assets/index.css";
import useRate from "./hooks/useRate";

function RateDialog({ onRate }: { onRate: (value: number) => void }) {
  const { rate, handleRate } = useRate();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>
          <Frown size={24} />
          <p>Evaluar</p>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="rate-dialog__overlay" />
        <Dialog.Content className="rate-dialog__content">
          <Dialog.Title className="rate-dialog__title">
            Avaliar programa
          </Dialog.Title>
          <Dialog.Description className="rate-dialog__description">
            Sua opinião importa! Avalie essa série e ajude a melhorar as
            recomendações para você e outros fãs.
          </Dialog.Description>
          <Rate
            value={rate}
            count={5}
            allowHalf
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 16,
              fontSize: 24,
            }}
            onChange={(value) => handleRate(value)}
          />
          <Dialog.Close asChild>
            <button
              className="rate-dialog__submit"
              onClick={() => onRate(rate)}
            >
              Avaliar
            </button>
          </Dialog.Close>

          <Dialog.Close asChild>
            <button className="rate-dialog__close" aria-label="Close">
              <X size={18} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default RateDialog;
