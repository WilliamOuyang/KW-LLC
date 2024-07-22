import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/components/ui/use-toast";
import BTC from "@/assets/Bitcoin.png";

const Pay = () => {
  const { toast } = useToast();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginTop: "50px",
        marginBottom: "20px",
      }}
    >
      <div>
        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <h1
            style={{
              fontFamily: "GT",
              fontSize: "40px",
              color: "#00D632",
            }}
          >
            Accepted Payment Methods
          </h1>
        </div>

        <Separator />

        <ul style={{ display: "flex", flexDirection: "column" }}>
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {" "}
                  <h1
                    style={{
                      fontFamily: "GT",
                      fontSize: "25px",
                    }}
                  >
                    Cash App
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1
                    style={{
                      fontFamily: "GT",
                      fontSize: "25px",
                    }}
                  >
                    Skrill
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1
                    style={{
                      fontFamily: "GT",
                      fontSize: "25px",
                    }}
                  >
                    Venmo
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1
                    style={{
                      fontFamily: "GT",
                      fontSize: "25px",
                    }}
                  >
                    Zelle
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1
                    style={{
                      fontFamily: "GT",
                      fontSize: "25px",
                    }}
                  >
                    Cash in Person
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1
                    style={{
                      fontFamily: "GT",
                      fontSize: "25px",
                    }}
                  >
                    Walmart/CVS/7-Eleven Cash Deposit
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1
                    style={{
                      fontFamily: "GT",
                      fontSize: "25px",
                    }}
                  >
                    Cash By Mail
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  Send mail to: 6335 Paseo Santa Cruz, Pleasanton, CA 94566
                  <h1
                          style={{
                            color: "skyblue",
                            textDecoration: "underline",
                          }}
                          onClick={() => {
                            navigator.clipboard.writeText(
                              "6335 Paseo Santa Cruz, Pleasanton, CA 94566"
                            );
                            toast({
                              title: "Address copied to clipboard ",
                              description:
                                "6335 Paseo Santa Cruz, Pleasanton, CA 94566",
                            });
                          }}
                        >
                          <button>Copy to Clipboard</button>
                        </h1>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1
                    style={{
                      fontFamily: "GT",
                      fontSize: "25px",
                    }}
                  >
                    Western Union
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1
                    style={{
                      fontFamily: "GT",
                      fontSize: "25px",
                    }}
                  >
                    Bank Transfer
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1
                    style={{
                      fontFamily: "GT",
                      fontSize: "25px",
                    }}
                  >
                    Strike Tip
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                https://strike.me/williamouyang/
                <h1
                          style={{
                            color: "skyblue",
                            textDecoration: "underline",
                          }}
                          onClick={() => {
                            navigator.clipboard.writeText(
                              "https://strike.me/williamouyang/"
                            );
                            toast({
                              title: "Strike Tip URL copied to clipboard",
                              description:
                                "https://strike.me/williamouyang/",
                            });
                          }}
                        >
                           <button>Copy to Clipboard</button>
                        </h1>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1
                    style={{
                      fontFamily: "GT",
                      fontSize: "25px",
                    }}
                  >
                    Bank of America
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1
                    style={{
                      fontFamily: "GT",
                      fontSize: "25px",
                    }}
                  >
                    Ethereum Network
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          <li>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1
                    style={{
                      fontFamily: "GT",
                      fontSize: "25px",
                    }}
                  >
                    Bitcoin Mainnet
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        background: "white",
                        padding: "8px",
                        borderRadius: "5%",
                      }}
                    >
                      <img src={BTC} />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "right",
                        flexDirection: "column",
                      }}
                    >
                      <button>
                        <h1>3BTuBzA2GpTbXUxEoZLCjhsT3jbCj3HEV8</h1>
                      </button>
                      <button>
                        <h1
                          style={{
                            color: "skyblue",
                            textDecoration: "underline",
                          }}
                          onClick={() => {
                            navigator.clipboard.writeText(
                              "3BTuBzA2GpTbXUxEoZLCjhsT3jbCj3HEV8"
                            );
                            toast({
                              title: "Wallet address copied to clipboard",
                              description:
                                "3BTuBzA2GpTbXUxEoZLCjhsT3jbCj3HEV8",
                            });
                          }}
                        >
                          Copy to Clipboard
                        </h1>
                      </button>
                      <button>
                        <h1
                          style={{
                            color: "skyblue",
                            textDecoration: "underline",
                          }}
                          onClick={() => {
                            window.open(
                              "bitcoin:3BTuBzA2GpTbXUxEoZLCjhsT3jbCj3HEV8"
                            );
                          }}
                        >
                          Bitcoin URI
                        </h1>
                      </button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pay;
