import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import BTC from "@/assets/Bitcoin.png";
import ETH from "@/assets/ETH.png";
import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import { Copy } from "lucide-react";
import { useEffect } from "react";

const Pay = () => {
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Pay | W&K OUYANG";
  }, []);


  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "70px",
          marginBottom: "70px",
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
             💵 Accepted Payment Methods 🪙
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
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Username: $WILLKOUYANG
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Payment Message: Payment to K&W OUYANG LLC
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
                      Skrill
                    </h1>
                  </AccordionTrigger>
                  <AccordionContent>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Username: williamouyang@gmx.com
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Message: Payment to K&W OUYANG LLC
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
                      Venmo
                    </h1>
                  </AccordionTrigger>
                  <AccordionContent>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Username: William-Ouyang-3
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      4 Numbers: 1375
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Payment Message: Payment to K&W OUYANG LLC
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
                      Zelle
                    </h1>
                  </AccordionTrigger>
                  <AccordionContent>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Username: gwko624p@gmail.com
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Name: William Ouyang
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Message to attach to payment: Payment to K&W OUYANG LLC
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
                      Cash in Person
                    </h1>
                  </AccordionTrigger>
                  <AccordionContent>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      {" "}
                      Email me to arrange a meeting: williamouyang@gmx.com
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
                      Walmart/CVS/7-Eleven Cash Deposit
                    </h1>
                  </AccordionTrigger>
                  <AccordionContent>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      To be determined.
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
                      Cash By Mail
                    </h1>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div style={{display:"flex", alignItems:'center'}}>
                    <h1 style={{ fontSize: "20px" }}>
                      Send mail to: 6335 Paseo Santa Cruz, Pleasanton, CA 94566
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
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
                          <Button  size="icon" className="ml-2">
                      <Copy />
                      </Button>
                    </h1>
                    </div>
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
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      First Name: William
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Middle Name: Kadin
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Last Name: Ouyang
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      State: California
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      E-Mail Address: williamouyang@gmx.com
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Receiver's bank account information: Bank Of America
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
                      Bank Transfer
                    </h1>
                  </AccordionTrigger>
                  <AccordionContent>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      <strong>
                        Domestic Wire Information
                      </strong>
                    </h1>
                    <br />
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Bank Name: Bank of America, N.A
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Bank Address: 222 Broadway, New York, NY 10038
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      ABA/Routing Number: 026009593
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Account Number: 325158599902
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      For Electronic Transfers & Payments (ACH): 121000358
                    </h1>

                    <br />
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      <strong>
                        International Wire Information
                      </strong>
                    </h1>
                    <br />
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      SWIFT Code: BOFAUS3N
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Bank Name: Bank of America, N.A
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Bank Address: 222 Broadway, New York, NY 10038
                    </h1>

                    <br />
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      <strong>
                        If transfer sent in foreign currency (NOT USD)
                      </strong>
                    </h1>
                    <br />
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      SWIFT Code: BOFAUS6S
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Bank Name: Bank of America, N.A
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Bank Address: 555 California St. San Francisco, CA 94104
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
                      Strike Tip
                    </h1>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div style={{display:'flex', alignItems:'center'}}>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      https://strike.me/williamouyang/
                    </h1>
                    <h1
                      onClick={() => {
                        navigator.clipboard.writeText(
                          "https://strike.me/williamouyang/"
                        );
                        toast({
                          title: "Strike Tip URL copied to clipboard",
                          description: "https://strike.me/williamouyang/",
                        });
                      }}
                    >
                      <Button  size="icon" className="ml-2">
                      <Copy />
                      </Button>
                    </h1>
                    </div>
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
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Region: Domestic (U.S.)
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Type of Account: Personal Checkings Account
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Region: Domestic (U.S.)
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      First Name: William
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Last Name: Ouyang
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Nickname: William Ouyang
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Street Address: 6335 Paseo Santa Cruz
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      City: Pleasanton
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      State: California{" "}
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      ZIP code: 94566{" "}
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Routing Number: 026009593
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Account Number: 325158599902
                    </h1>
                    <h1
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Account Type: Checkings
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
                      Ethereum Network
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
                        <img src={ETH} />
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
                          <h1
                            style={{
                              fontSize: "20px",
                            }}
                          >
                            0x2D05297EbA0dD640f4130F9b0210AF696100aeae
                          </h1>
                        </button>

                        <div style={{display:'flex', width:'100%', justifyContent:'center'}}>
                        <h1
                          style={{
                            color: "blue",

                            fontSize: "20px",
                          }}
                          onClick={() => {
                            navigator.clipboard.writeText(
                              "0x2D05297EbA0dD640f4130F9b0210AF696100aeae"
                            );
                            toast({
                              title:
                                "Ethereum wallet address copied to clipboard",
                              description:
                                "0x2D05297EbA0dD640f4130F9b0210AF696100aeae",
                            });
                          }}
                        >
                          <Button>Copy to Clipboard</Button>
                        </h1>
                        </div>

                      </div>
                    </div>
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
                          <h1
                            style={{
                              fontSize: "20px",
                            }}
                          >
                            3BTuBzA2GpTbXUxEoZLCjhsT3jbCj3HEV8
                          </h1>
                        </button>
                 
                        <div style={{display:'flex', width:'100%', justifyContent:'center'}}>
                          <h1
                            style={{
                              color: "blue",
                              fontSize: "20px",
                            }}
                            onClick={() => {
                              navigator.clipboard.writeText(
                                "3BTuBzA2GpTbXUxEoZLCjhsT3jbCj3HEV8"
                              );
                              toast({
                                title:
                                  "Bitcoin wallet address copied to clipboard",
                                description:
                                  "3BTuBzA2GpTbXUxEoZLCjhsT3jbCj3HEV8",
                              });
                            }}
                          >
                            <Button>
                            Copy to Clipboard
                            </Button>
                          </h1>
                        </div>
                       
                        
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pay;
