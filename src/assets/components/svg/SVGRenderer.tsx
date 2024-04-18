import { useDynamicSvgImport } from "./SVGLoader";
import React from "react";

interface IProps {
  src: string;
  svgProp?: React.SVGProps<SVGSVGElement>;
}

function SvgIcon(props: IProps) {
  const { src, svgProp } = props;
  const { loading, SvgIcon } = useDynamicSvgImport(src);

  return (
    <>
      {loading && <div>loading...</div>}
      {SvgIcon && <SvgIcon {...svgProp} />}
    </>
  );
}

export default SvgIcon;
