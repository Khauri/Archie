import type { Page } from "puppeteer-core";

type ExtractionRule = {
  selector: string;
  attribute?: string;
  property?: string;
  transform?: <T>(value: string) => T;
}

const CommonTransforms = {
  Number: (value: string) => Number(value),
  Boolean: (value: string) => Boolean(value),
  Date: (value: string) => new Date(value),
}

/**
 * Use an extraction rule to extract and transform a value from a page. The string should be in this format:
 *  <selector>[@<attribute>|$<property>][::<transform>]
 * Dollar sign ($) and at sign (@) should be escaped with a backslash (\) if they are part of the selector.
 * Examples: 
 *   "meta[property='og:title']@content" - extract the content attribute from the meta tag with property og:title
 *   "div.price$innerText::Number" - extract the innerText property a div with class price and transform it to a number
 */
export function parseExtractionRuleString(ruleString: string): ExtractionRule {
  const regex = /^(?<selector>.+?)(@(?<attribute>.+?)|\$(?<property>.+?))?(::(?<transform>.+))?$/;
  const match = ruleString.match(regex);
  if (!match) {
    throw new Error(`Invalid extraction rule: ${ruleString}`);
  }
  const { selector, attribute, property, transform } = match.groups;
  const transformFunction = transform ? CommonTransforms[transform] : undefined;
  return {
    selector,
    attribute,
    property,
    transform: transformFunction,
  };
}

export async function extractByRules(page: Page, extractionRules: ExtractionRule[]) {
  const values = await Promise.all(extractionRules.map(async (rule) => {
    const element = await page.$(rule.selector);
    if(!element) {
      return null;
    }
    const value = rule.attribute
      ? await element.evaluate((el, attr) => el.getAttribute(attr), rule.attribute)
      : await element.evaluate((el, prop) => el[prop], rule.property);
    return rule.transform ? rule.transform(value) : value;
  }));
  return values;
}