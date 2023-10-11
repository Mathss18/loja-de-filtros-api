export interface TemplateCompiler {
  compile(template: string, data: any): string;
}
