import { readFileSync } from "fs";
import { TemplateCompiler } from "../../protocols/template-compiler";
import Handlebars from "handlebars";

export class HandlebarsTemplateCompiler implements TemplateCompiler {
  compile(template: string, data: any): string {
    const file = readFileSync(template, "utf8");
    const compiledTemplate = Handlebars.compile(file);
    return compiledTemplate(data);
  }
}
