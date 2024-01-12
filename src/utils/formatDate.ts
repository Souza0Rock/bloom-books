import moment from "moment";

type TFormats =
  | "YYYY-MM-DD"
  | "YYYY/MM/DD"
  | "DD-MM-YYYY"
  | "DD/MM/YYYY"
  | "D MMM YYYY"
  | "0D MMM YYYY";

export const formatDate = (date: Date, format?: TFormats) => {
  const d = new Date(date);

  moment.locale("pt-br");

  const includesZero = format && format.includes("0");

  return moment(d).format(
    format && includesZero ? format.replace("0D", "DD") : format || "YYYY-MM-DD"
  );
};
