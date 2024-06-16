import { FunctionComponent } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.aiAnalysisParent, className].join(" ")}>
      <b className={styles.aiAnalysis}>AI Analysis</b>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.tableHeaderColumnsWrapper}>
          <div className={styles.tableHeaderColumns}>
            <div className={styles.tokenNameHeader}>
              <div className={styles.iconPlaceholder}>#</div>
              <b className={styles.name}>Name</b>
            </div>
            <div className={styles.headerNames}>
              <b className={styles.price}>Price</b>
            </div>
            <div className={styles.headerNames1}>
              <b className={styles.h}>1h %</b>
            </div>
            <b className={styles.h1}>24h %</b>
            <div className={styles.headerNames2}>
              <b className={styles.d}>7d %</b>
            </div>
            <div className={styles.headerNames3}>
              <b className={styles.marketCap}>Market Cap</b>
            </div>
            <div className={styles.headerNames4}>
              <b className={styles.volume24h}>Volume(24h)</b>
            </div>
            <b className={styles.circulatingSupply}>Circulating Supply</b>
          </div>
        </div>
        <div className={styles.tokenRowContainerParent}>
          <div className={styles.tokenRowContainer}>
            <div className={styles.tokenRow}>
              <div className={styles.tokenData}>
                <img
                  className={styles.icons}
                  loading="lazy"
                  alt=""
                  src="/icons@2x.png"
                />
              </div>
              <div className={styles.tokens}>
                <div className={styles.token1}>
                  <div className={styles.token}>
                    <div className={styles.name1}>
                      <div className={styles.nameChild} />
                      <div className={styles.starContainer}>
                        <img
                          className={styles.starIcons}
                          loading="lazy"
                          alt=""
                          src="/star-6.svg"
                        />
                      </div>
                      <div className={styles.nameContainer}>
                        <div className={styles.bitcoinWrapper}>
                          <div className={styles.bitcoin}>Bitcoin</div>
                        </div>
                        <div className={styles.btc}>BTC</div>
                      </div>
                    </div>
                    <b className={styles.b}>$67,154.99</b>
                    <div className={styles.upDown}>
                      <div className={styles.upDownInner}>
                        <img
                          className={styles.frameItem}
                          alt=""
                          src="/arrow-1.svg"
                        />
                      </div>
                      <div className={styles.div}>0.23%</div>
                    </div>
                    <div className={styles.upDown1}>
                      <div className={styles.upDownChild}>
                        <img
                          className={styles.frameInner}
                          alt=""
                          src="/arrow-1-1.svg"
                        />
                      </div>
                      <div className={styles.div1}>0.83%</div>
                    </div>
                    <div className={styles.upDown2}>
                      <div className={styles.frameDiv}>
                        <img
                          className={styles.arrowIcon}
                          alt=""
                          src="/arrow-1-1.svg"
                        />
                      </div>
                      <div className={styles.div2}>6.83%</div>
                    </div>
                    <b className={styles.b1}>$1,319,513,500,985</b>
                    <b className={styles.b2}>$24,069,938,171</b>
                    <b className={styles.btc1}>19,712,046 BTC</b>
                    <b className={styles.b3}>9.0</b>
                  </div>
                  <img
                    className={styles.token1Child}
                    alt=""
                    src="/line-48.svg"
                  />
                </div>
                <div className={styles.token2}>
                  <div className={styles.token3}>
                    <div className={styles.name2}>
                      <div className={styles.nameItem} />
                      <div className={styles.nameInner}>
                        <img
                          className={styles.starIcon}
                          alt=""
                          src="/star-6.svg"
                        />
                      </div>
                      <div className={styles.frameParent}>
                        <div className={styles.bitcoinContainer}>
                          <div className={styles.bitcoin1}>Ethereum</div>
                        </div>
                        <div className={styles.btc2}>ETH</div>
                      </div>
                    </div>
                    <b className={styles.b4}>$3,511.11</b>
                    <div className={styles.upDown3}>
                      <div className={styles.upDownInner1}>
                        <img
                          className={styles.frameChild1}
                          alt=""
                          src="/arrow-1-1.svg"
                        />
                      </div>
                      <div className={styles.div3}>0.62%</div>
                    </div>
                    <div className={styles.upDown4}>
                      <div className={styles.upDownInner2}>
                        <img
                          className={styles.frameChild2}
                          alt=""
                          src="/arrow-1-1.svg"
                        />
                      </div>
                      <div className={styles.div4}>0.72%</div>
                    </div>
                    <div className={styles.upDown5}>
                      <div className={styles.upDownInner3}>
                        <img
                          className={styles.frameChild3}
                          alt=""
                          src="/arrow-1-1.svg"
                        />
                      </div>
                      <div className={styles.div5}>6.83%</div>
                    </div>
                    <b className={styles.b5}>$419,091,432,109</b>
                    <b className={styles.b6}>$12,748,811,679</b>
                    <b className={styles.btc3}>120,151,114 ETH</b>
                    <b className={styles.b7}>8.0</b>
                  </div>
                  <img
                    className={styles.token2Child}
                    alt=""
                    src="/line-48.svg"
                  />
                </div>
                <div className={styles.token21}>
                  <div className={styles.token4}>
                    <div className={styles.name3}>
                      <div className={styles.ellipseDiv} />
                      <div className={styles.nameInner1}>
                        <img
                          className={styles.frameChild4}
                          alt=""
                          src="/star-6.svg"
                        />
                      </div>
                      <div className={styles.frameGroup}>
                        <div className={styles.bitcoinFrame}>
                          <div className={styles.bitcoin2}>Tether</div>
                        </div>
                        <div className={styles.btc4}>USDT</div>
                      </div>
                    </div>
                    <b className={styles.b8}>$0.9997</b>
                    <div className={styles.upDown6}>
                      <div className={styles.upDownInner4}>
                        <img
                          className={styles.frameChild5}
                          alt=""
                          src="/arrow-1.svg"
                        />
                      </div>
                      <div className={styles.div6}>0.01%</div>
                    </div>
                    <div className={styles.upDown7}>
                      <div className={styles.upDownInner5}>
                        <img
                          className={styles.frameChild6}
                          alt=""
                          src="/arrow-1-1.svg"
                        />
                      </div>
                      <div className={styles.div7}>0.02%</div>
                    </div>
                    <div className={styles.upDown8}>
                      <div className={styles.upDownInner6}>
                        <img
                          className={styles.frameChild7}
                          alt=""
                          src="/arrow-1.svg"
                        />
                      </div>
                      <div className={styles.div8}>0.03%</div>
                    </div>
                    <b className={styles.b9}>$112,506,939,806</b>
                    <b className={styles.b10}>$24,069,938,171</b>
                    <b className={styles.btc5}>112,559,449,771 USDT</b>
                    <b className={styles.b11}>6.0</b>
                  </div>
                  <img
                    className={styles.token2Item}
                    alt=""
                    src="/line-48.svg"
                  />
                </div>
                <div className={styles.token22}>
                  <div className={styles.token5}>
                    <div className={styles.name4}>
                      <div className={styles.nameChild1} />
                      <div className={styles.nameInner2}>
                        <img
                          className={styles.frameChild8}
                          alt=""
                          src="/star-6.svg"
                        />
                      </div>
                      <div className={styles.frameContainer}>
                        <div className={styles.bitcoinWrapper1}>
                          <div className={styles.bitcoin3}>BNB</div>
                        </div>
                        <div className={styles.btc6}>BNB</div>
                      </div>
                    </div>
                    <b className={styles.b12}>$609.93</b>
                    <div className={styles.upDown9}>
                      <div className={styles.upDownInner7}>
                        <img
                          className={styles.frameChild9}
                          alt=""
                          src="/arrow-1.svg"
                        />
                      </div>
                      <div className={styles.div9}>0.01%</div>
                    </div>
                    <div className={styles.upDown10}>
                      <div className={styles.upDownInner8}>
                        <img
                          className={styles.frameChild10}
                          alt=""
                          src="/arrow-1-1.svg"
                        />
                      </div>
                      <div className={styles.div10}>0.02%</div>
                    </div>
                    <div className={styles.upDown11}>
                      <div className={styles.upDownInner9}>
                        <img
                          className={styles.frameChild11}
                          alt=""
                          src="/arrow-1.svg"
                        />
                      </div>
                      <div className={styles.div11}>0.03%</div>
                    </div>
                    <b className={styles.b13}>$112,506,939,806</b>
                    <b className={styles.b14}>$24,069,938,171</b>
                    <b className={styles.btc7}>112,559,449,771 USDT</b>
                    <b className={styles.b15}>7.0</b>
                  </div>
                  <img
                    className={styles.token2Inner}
                    alt=""
                    src="/line-48.svg"
                  />
                </div>
                <div className={styles.token23}>
                  <div className={styles.token6}>
                    <div className={styles.name5}>
                      <div className={styles.nameChild2} />
                      <div className={styles.nameInner3}>
                        <img
                          className={styles.frameChild12}
                          alt=""
                          src="/star-6.svg"
                        />
                      </div>
                      <div className={styles.frameParent1}>
                        <div className={styles.bitcoinWrapper2}>
                          <div className={styles.bitcoin4}>Tether</div>
                        </div>
                        <div className={styles.btc8}>USDT</div>
                      </div>
                    </div>
                    <b className={styles.b16}>$0,9995</b>
                    <div className={styles.upDown12}>
                      <div className={styles.upDownInner10}>
                        <img
                          className={styles.frameChild13}
                          alt=""
                          src="/arrow-1.svg"
                        />
                      </div>
                      <div className={styles.div12}>0.23%</div>
                    </div>
                    <div className={styles.upDown13}>
                      <div className={styles.upDownInner11}>
                        <img
                          className={styles.frameChild14}
                          alt=""
                          src="/arrow-1-1.svg"
                        />
                      </div>
                      <div className={styles.div13}>0.83%</div>
                    </div>
                    <div className={styles.upDown14}>
                      <div className={styles.upDownInner12}>
                        <img
                          className={styles.frameChild15}
                          alt=""
                          src="/arrow-1-1.svg"
                        />
                      </div>
                      <div className={styles.div14}>6.83%</div>
                    </div>
                    <b className={styles.b17}>$1,319,513,500,985</b>
                    <b className={styles.b18}>$24,069,938,171</b>
                    <b className={styles.btc9}>19,712,046 BTC</b>
                    <b className={styles.b19}>9.0</b>
                  </div>
                  <img className={styles.lineIcon} alt="" src="/line-48.svg" />
                </div>
                <div className={styles.token24}>
                  <div className={styles.token7}>
                    <div className={styles.name6}>
                      <div className={styles.nameChild3} />
                      <div className={styles.nameInner4}>
                        <img
                          className={styles.frameChild16}
                          alt=""
                          src="/star-6.svg"
                        />
                      </div>
                      <div className={styles.frameParent2}>
                        <div className={styles.bitcoinWrapper3}>
                          <div className={styles.bitcoin5}>Tether</div>
                        </div>
                        <div className={styles.btc10}>USDT</div>
                      </div>
                    </div>
                    <b className={styles.b20}>$0,9995</b>
                    <div className={styles.upDown15}>
                      <div className={styles.upDownInner13}>
                        <img
                          className={styles.frameChild17}
                          alt=""
                          src="/arrow-1.svg"
                        />
                      </div>
                      <div className={styles.div15}>0.23%</div>
                    </div>
                    <div className={styles.upDown16}>
                      <div className={styles.upDownInner14}>
                        <img
                          className={styles.frameChild18}
                          alt=""
                          src="/arrow-1-1.svg"
                        />
                      </div>
                      <div className={styles.div16}>0.83%</div>
                    </div>
                    <div className={styles.upDown17}>
                      <div className={styles.upDownInner15}>
                        <img
                          className={styles.frameChild19}
                          alt=""
                          src="/arrow-1-1.svg"
                        />
                      </div>
                      <div className={styles.div17}>6.83%</div>
                    </div>
                    <b className={styles.b21}>$1,319,513,500,985</b>
                    <b className={styles.b22}>$24,069,938,171</b>
                    <b className={styles.btc11}>19,712,046 BTC</b>
                    <b className={styles.b23}>9.0</b>
                  </div>
                  <img
                    className={styles.token2Child1}
                    alt=""
                    src="/line-48.svg"
                  />
                </div>
                <div className={styles.token25}>
                  <div className={styles.token8}>
                    <div className={styles.name7}>
                      <div className={styles.nameChild4} />
                      <div className={styles.nameInner5}>
                        <img
                          className={styles.frameChild20}
                          alt=""
                          src="/star-6.svg"
                        />
                      </div>
                      <div className={styles.frameParent3}>
                        <div className={styles.bitcoinWrapper4}>
                          <div className={styles.bitcoin6}>Tether</div>
                        </div>
                        <div className={styles.btc12}>USDT</div>
                      </div>
                    </div>
                    <b className={styles.b24}>$0,9995</b>
                    <div className={styles.upDown18}>
                      <div className={styles.upDownInner16}>
                        <img
                          className={styles.frameChild21}
                          alt=""
                          src="/arrow-1.svg"
                        />
                      </div>
                      <div className={styles.div18}>0.23%</div>
                    </div>
                    <div className={styles.upDown19}>
                      <div className={styles.upDownInner17}>
                        <img
                          className={styles.frameChild22}
                          alt=""
                          src="/arrow-1-1.svg"
                        />
                      </div>
                      <div className={styles.div19}>0.83%</div>
                    </div>
                    <div className={styles.upDown20}>
                      <div className={styles.upDownInner18}>
                        <img
                          className={styles.frameChild23}
                          alt=""
                          src="/arrow-1-1.svg"
                        />
                      </div>
                      <div className={styles.div20}>6.83%</div>
                    </div>
                    <b className={styles.b25}>$1,319,513,500,985</b>
                    <b className={styles.b26}>$24,069,938,171</b>
                    <b className={styles.btc13}>19,712,046 BTC</b>
                    <b className={styles.b27}>9.0</b>
                  </div>
                  <img
                    className={styles.token2Child2}
                    alt=""
                    src="/line-48.svg"
                  />
                </div>
                <div className={styles.token26}>
                  <div className={styles.token9}>
                    <div className={styles.name8}>
                      <div className={styles.nameChild5} />
                      <div className={styles.nameInner6}>
                        <img
                          className={styles.frameChild24}
                          alt=""
                          src="/star-6.svg"
                        />
                      </div>
                      <div className={styles.frameParent4}>
                        <div className={styles.bitcoinWrapper5}>
                          <div className={styles.bitcoin7}>Tether</div>
                        </div>
                        <div className={styles.btc14}>USDT</div>
                      </div>
                    </div>
                    <b className={styles.b28}>$0,9995</b>
                    <div className={styles.upDown21}>
                      <div className={styles.upDownInner19}>
                        <img
                          className={styles.frameChild25}
                          alt=""
                          src="/arrow-1.svg"
                        />
                      </div>
                      <div className={styles.div21}>0.23%</div>
                    </div>
                    <div className={styles.upDown22}>
                      <div className={styles.upDownInner20}>
                        <img
                          className={styles.frameChild26}
                          alt=""
                          src="/arrow-1-1.svg"
                        />
                      </div>
                      <div className={styles.div22}>0.83%</div>
                    </div>
                    <div className={styles.upDown23}>
                      <div className={styles.upDownInner21}>
                        <img
                          className={styles.frameChild27}
                          alt=""
                          src="/arrow-1-1.svg"
                        />
                      </div>
                      <div className={styles.div23}>6.83%</div>
                    </div>
                    <b className={styles.b29}>$1,319,513,500,985</b>
                    <b className={styles.b30}>$24,069,938,171</b>
                    <b className={styles.btc15}>19,712,046 BTC</b>
                    <b className={styles.b31}>9.0</b>
                  </div>
                  <img
                    className={styles.token2Child3}
                    alt=""
                    src="/line-48.svg"
                  />
                </div>
                <div className={styles.token27}>
                  <div className={styles.token10}>
                    <div className={styles.name9}>
                      <div className={styles.nameChild6} />
                      <div className={styles.nameInner7}>
                        <img
                          className={styles.frameChild28}
                          alt=""
                          src="/star-6.svg"
                        />
                      </div>
                      <div className={styles.frameParent5}>
                        <div className={styles.bitcoinWrapper6}>
                          <div className={styles.bitcoin8}>Tether</div>
                        </div>
                        <div className={styles.btc16}>USDT</div>
                      </div>
                    </div>
                    <b className={styles.b32}>$0,9995</b>
                    <div className={styles.upDown24}>
                      <div className={styles.upDownInner22}>
                        <img
                          className={styles.frameChild29}
                          alt=""
                          src="/arrow-1.svg"
                        />
                      </div>
                      <div className={styles.div24}>0.23%</div>
                    </div>
                    <div className={styles.upDown25}>
                      <div className={styles.upDownInner23}>
                        <img
                          className={styles.frameChild30}
                          alt=""
                          src="/arrow-1-1.svg"
                        />
                      </div>
                      <div className={styles.div25}>0.83%</div>
                    </div>
                    <div className={styles.upDown26}>
                      <div className={styles.upDownInner24}>
                        <img
                          className={styles.frameChild31}
                          alt=""
                          src="/arrow-1-1.svg"
                        />
                      </div>
                      <div className={styles.div26}>6.83%</div>
                    </div>
                    <b className={styles.b33}>$1,319,513,500,985</b>
                    <b className={styles.b34}>$24,069,938,171</b>
                    <b className={styles.btc17}>19,712,046 BTC</b>
                    <b className={styles.b35}>9.0</b>
                  </div>
                  <img
                    className={styles.token2Child4}
                    alt=""
                    src="/line-48.svg"
                  />
                </div>
                <div className={styles.token28}>
                  <div className={styles.token11}>
                    <div className={styles.name10}>
                      <div className={styles.nameChild7} />
                      <div className={styles.nameInner8}>
                        <img
                          className={styles.frameChild32}
                          alt=""
                          src="/star-6.svg"
                        />
                      </div>
                      <div className={styles.frameParent6}>
                        <div className={styles.bitcoinWrapper7}>
                          <div className={styles.bitcoin9}>Tether</div>
                        </div>
                        <div className={styles.btc18}>USDT</div>
                      </div>
                    </div>
                    <b className={styles.b36}>$0,9995</b>
                    <div className={styles.upDown27}>
                      <div className={styles.upDownInner25}>
                        <img
                          className={styles.frameChild33}
                          alt=""
                          src="/arrow-1.svg"
                        />
                      </div>
                      <div className={styles.div27}>0.23%</div>
                    </div>
                    <div className={styles.upDown28}>
                      <div className={styles.upDownInner26}>
                        <img
                          className={styles.frameChild34}
                          alt=""
                          src="/arrow-1-1.svg"
                        />
                      </div>
                      <div className={styles.div28}>0.83%</div>
                    </div>
                    <div className={styles.upDown29}>
                      <div className={styles.upDownInner27}>
                        <img
                          className={styles.frameChild35}
                          alt=""
                          src="/arrow-1-1.svg"
                        />
                      </div>
                      <div className={styles.div29}>6.83%</div>
                    </div>
                    <b className={styles.b37}>$1,319,513,500,985</b>
                    <b className={styles.b38}>$24,069,938,171</b>
                    <b className={styles.btc19}>19,712,046 BTC</b>
                    <b className={styles.b39}>9.0</b>
                  </div>
                  <img
                    className={styles.token2Child5}
                    alt=""
                    src="/line-48.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.showing1100OutOf10102Parent}>
            <div className={styles.showing1}>Showing 1 - 100 out of 10102</div>
            <FormControl
              className={styles.paginationControls}
              variant="standard"
              sx={{
                borderTopWidth: "0px",
                borderRightWidth: "0px",
                borderBottomWidth: "0px",
                borderLeftWidth: "0px",
                borderRadius: "0px 0px 0px 0px",
                width: "188px",
                height: "30px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "30px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "30px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "30px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "30px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <InputLabel color="primary">Show rows</InputLabel>
              <Select
                color="primary"
                defaultValue="100"
                size="small"
                label="Show rows"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="6.7px"
                    height="3px"
                    src="/vector.svg"
                    style={{ marginRight: "20.099999999999955px" }}
                  />
                )}
              >
                <MenuItem value="Option1">Option1</MenuItem>
                <MenuItem value="Option2">Option2</MenuItem>
                <MenuItem value="Option3">Option3</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
