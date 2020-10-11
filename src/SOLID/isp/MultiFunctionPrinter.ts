import PrinterInterface
  from './Printer.interface';
import ScannerInterface from './Scanner.interface';
import Document from './Document';

/**
 * Multi function printer
 */
export default class MultiFunctionPrinter
implements PrinterInterface, ScannerInterface {
  /**
   * Prints multi function printer
   * @param content -
   * @returns void
   */
  print(content: Document): void {
    console.log(`printing:${content.text}`);
  }

  /**
   * Scans multi function printer
   * @param content -
   */
  scan(content: Document): void {
    console.log(`scanning:${content.text}`);
  }
}
