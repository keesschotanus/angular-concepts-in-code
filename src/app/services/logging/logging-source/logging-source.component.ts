import { Component } from '@angular/core';

@Component({
  selector: 'app-logging-source',
  templateUrl: './logging-source.component.html',
})
export class LoggingSourceComponent {

  componentSource = `
  import { Component } from '@angular/core';
  import { LoggingService } from 'app/shared/services/logging/logging.service';
  import { LogLevel } from 'app/shared/services/logging/log-level.enum';
  
  /**
   * Demonstrates how to use the logging service.
   */
  @Component({
    selector: 'app-logging',
    templateUrl: './logging.component.html',
  })
  export class LoggingComponent {
  
    /**
     * Log level keys for the select log level element.
     */
    logLevelKeys = [];
  
    /**
     * Log level labels for the select log level element.
     */
    logLevelLabels = [];
    
    /**
     * The current log level.
     */
    logLevel: LogLevel = LogLevel.Info;
    
    /**
     * Constructs this component from the supplied LoggingService.
     * @param loggingService The LoggingService instance.
     */
    constructor(private loggingService: LoggingService) {
      // Split the original enumeration of log levels into keys and labels to be used in the log level select element.
      const logLevelEnumArray = Object.keys(LogLevel);
      this.logLevelKeys = logLevelEnumArray.slice(0, logLevelEnumArray.length / 2);
      this.logLevelLabels = logLevelEnumArray.slice(logLevelEnumArray.length / 2);
    }
  
    /**
     * Sets the new log level.
     * @param event The change event.
     */
    onChangeLogLevel(event: any) {
      this.loggingService.setLogLevel(+event.target.value);
    }
  
    /**
     * Logs a message at trace level.
     */
    onTrace() {
      this.loggingService.trace('Trace message');
    }
  
    /**
     * Logs a message at info level.
     */
    onInfo() {
      this.loggingService.info('Info message');
    }
  
    /**
     * Logs a message at warning level.
     */
    onWarning() {
      this.loggingService.warning('Warning message');
    }
  
    /**
     * Logs a message at error level.
     */
    onError() {
      this.loggingService.error('Error message');
    }
  
    /**
     * Logs a message at fatal level.
     */
    onFatal() {
      this.loggingService.fatal('Fatal message');
    }
  }
  `;

  htmlSource = `
  <h1>LoggingService Demo</h1>
  <p>
    Click a button log a message at the level indicated by the button.
    You can change the log level using the drop-down.
    Use the browser's console to check that a message is only logged if its level is at least as high as the current log level.
  </p>
  
  <div>
    <label for="idLogLevel">Log level:</label>
    <select (change)="onChangeLogLevel($event)" id="idLogLevel" [ngModel]="logLevel">
      <option *ngFor="let logLevelKey of logLevelKeys" [value]="logLevelKey" [label]="logLevelLabels[logLevelKey]"></option>
    </select>
    <button (click)="onTrace()" type="button">Trace</button>
    <button (click)="onInfo()" type="button">Info</button>
    <button (click)="onWarning()" type="button">Warning</button>
    <button (click)="onError()" type="button">Error</button>
    <button (click)="onFatal()" type="button">Fatal</button>
  </div>`;

  serviceSource = `
  import { Injectable } from '@angular/core';
  import { LogLevel } from 'app/shared/services/logging/log-level.enum';
  
  /**
   * Simple logging service that currently is only capable of logging to the console.
   * It does have a notion of a log level.
   * Messages will only be logged if their level is at least as high as the current log level.
   */
  @Injectable()
  export class LoggingService {
  
    /**
     * The current log level.
     */
    private logLevel: LogLevel = LogLevel.Info;
  
    /**
     * Sets the current log level.
     * Only messages at this or a higher lg level are actually logged.
     * @param logLevel The log level to set.
     */
    public setLogLevel(logLevel: LogLevel): void {
      this.logLevel = logLevel;
    }
    /**
     * Logs a message at 'Trace' level.
     * @param message The message to log.
     */
    public trace(message: string) {
      this.log(LogLevel.Trace, message);
    }
  
    /**
     * Logs a message at 'Info' level.
     * @param message The message to log.
     */
    public info(message: string) {
      this.log(LogLevel.Info, message);
    }
  
    /**
     * Logs a message at 'Warning' level.
     * @param message The message to log.
     */
    public warning(message: string) {
      this.log(LogLevel.Warning, message);
    }
  
    /**
     * Logs a message at 'Error' level.
     * @param message The message to log.
     */
    public error(message: string) {
      this.log(LogLevel.Error, message);
    }
  
    /**
     * Logs a message at 'Fatal' level.
     * @param message The message to log.
     */
    public fatal(message: string) {
      this.log(LogLevel.Fatal, message);
    }
  
    /**
     * Logs a message at the supplied log level.
     * The message is only logged when the supplied log level is equal or higher than then current log level.
     * @param message The message to log.
     */
    public log(logLevel: LogLevel, message: string) {
      if (logLevel >= this.logLevel) {
        console.log(message);
      }
    }
  
  }`;

  enumSource = `
  /**
   * Enumeration of log levels.
   */
  export enum LogLevel {
    Trace,
    Info,
    Warning,
    Error,
    Fatal
  }`;

}
